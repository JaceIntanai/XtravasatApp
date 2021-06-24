import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton, ShowDetail} from '../components/common'
import { StyleSheet, Image} from 'react-native';
import { auth, db } from '../services';
import { createIconSetFromFontello } from 'react-native-vector-icons';

class HistoryPage extends Component{

    state = {
        uID: this.props.navigation.state.params.uID,
        image: '',
        position: '',
        result: '',
        number: '0000',
    }

    componentDidMount(){
        console.log(this.state.uID)
        this.recvData();
    }

    recvData = () => {
        console.log(db.dataInfo(this.state.uID, '0000'))
        this.state.image, this.state.position = db.dataInfo(this.state.uID, this.state.number)
        console.log("RECVVVV")
        console.log(this.state.image)
        console.log(this.state.position)
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ประวัติการถ่ายภาพ
                </Topbar>
                <ShowDetail mode="contained">
                    Hey
                </ShowDetail>
            </Background>
        );
    }
}


export default HistoryPage;