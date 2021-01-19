import React, {Component} from 'react';
import { Logo, Button, Background, Header } from '../components/common'
import {Image, StyleSheet, Dimensions} from 'react-native';
import * as FileSystem from 'expo-file-system';

class ConfirmPage extends Component{

    constructor(props){
        super(props);
    }

    state = {
        position: '',
        uri: null,
    }

    async componentDidMount() {
        const image_uri = this.props.navigation.getParam('image_uri',null);
        console.log(image_uri);
        await this.setState({uri: image_uri})
    }


    render(){
        // console.log(this.state.uri);
        return (
            <Background>
                <Header>ยืนยัน</Header>
                <Image 
                    source={{uri: this.state.uri}}
                    style={styles.preview} 
                />
                <Button 
                    mode="contained"
                    onPress={
                        ()=>this.props.navigation.navigate('cameraP')
                    }
                >
                    ถ่ายใหม่
                </Button>
                <Button 
                    mode="contained"
                    onPress={()=>this.props.navigation.navigate('loading')}
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