import React, {Component} from 'react';
import { Logo, Button, Background, Header } from '../components/common'
import {Image, StyleSheet, Dimensions} from 'react-native';
import { auth, db } from '../services';

class ConfirmPage extends Component{

    constructor(props){
        super(props);
    }

    state = {
        // position: '',
        uri: null,
        // uri: this.props.navigation.state.params.uri,
        position: this.props.navigation.state.params.position,
        uID: this.props.navigation.state.params.uID,
        number: this.props.navigation.state.params.number,
    }

    async componentDidMount() {
        const image_uri = this.props.navigation.getParam('image_uri',null);
        console.log(image_uri);
        await this.setState({uri: image_uri})
    }

    confirmPic = () => {
        console.log(this.state.uID)
        db.updatePicture(this.state.uID, this.state.number, this.state.position, this.state.uri)
        console.log("Already Update Image")
        this.props.navigation.navigate('loading',{
            uID: this.state.uID,
            number: this.state.number,
            position: this.state.position,
            uri: this.state.uri,
        })
    }

    render(){
        // console.log(this.state.uri);
        return (
            <Background>
                <Image 
                    source={{uri: this.state.uri}}
                    style={styles.preview} 
                />
                <Button 
                    mode="contained"
                    onPress={
                        ()=>this.props.navigation.navigate('cameraP',{
                            uID: this.state.uID,
                            number: this.state.number,
                        })
                    }
                >
                    ถ่ายใหม่
                </Button>
                <Button 
                    mode="contained"
                    onPress={()=>this.confirmPic()}
                >
                    ยืนยัน
                </Button>
            </Background>
        );
    }
    
}

const styles = StyleSheet.create({
    preview: {
        height: Dimensions.get('window').height* 0.72,
        width: Dimensions.get('window').width,
    }
});

export default ConfirmPage;