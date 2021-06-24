import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton, ShowDetail} from '../components/common'
import { StyleSheet, Image, Dimensions} from 'react-native';
import { db } from '../services/firebase';
import { createIconSetFromFontello } from 'react-native-vector-icons';

class HistoryPage extends Component{

    state = {
        uID: this.props.navigation.state.params.uID,
        image: '',
        position: '',
        result: '',
        number: '0000',
    }

    async componentDidMount(){
        await db.ref('user/' + this.state.uID + '/patients/' + this.state.number).on('value', (snapshot) => {
            let image = snapshot.val().image;
            let position = snapshot.val().position;
            // console.log(image, position)
            this.setState({ image: image , position: position})
        });
        
        // console.log(this.state.image, this.state.position)
    }

    // recvData = () => {
    //     // console.log(this.state.uID, this.state.number)
    //     db.ref('user/' + this.state.uID + '/patients/' + this.state.number).on('value', (snapshot) => {
    //         let image = snapshot.val().image;
    //         let position = snapshot.val().position;
    //         console.log(image, position)
    //         this.setState({ image: image , position: position})
    //     });
        
    //     console.log(this.state.image, this.state.position)
    // }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ประวัติการถ่ายภาพ
                </Topbar>
                <ShowDetail>
                    <Image 
                        source={{uri: this.state.image}}
                        style={styles.preview} 
                    />
                </ShowDetail>
                
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

export default HistoryPage;