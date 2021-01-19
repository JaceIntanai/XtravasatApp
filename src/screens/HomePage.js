import React, { Component} from 'react';
import { Logo, Button, Background, LogOutButton } from '../components/common'
import { auth } from '../services';

class HomePage extends Component{

    clickLogout(){
        auth.doSignOut();
        this.props.navigation.navigate('login')
    }

    newPatient(){
        this.props.navigation.navigate('patient')
    }

    render(){
        return (
        <Background>
            <Button mode="contained" 
                onPress={() => this.clickLogout()}
            >
                LOGOUT
            </Button>
            <Logo />
            <Button mode="contained" 
                onPress={() => this.newPatient()}
            >
                ผู้ป่วยใหม่
            </Button>
            <Button mode="contained">
                ติดตามประเมินอาการ
            </Button>
            <Button mode="contained">
                ประวัติการถ่ายภาพ
            </Button>
            <Button mode="contained">
                รายการที่เสร็จสิ้น
            </Button>
        </Background>
        );
    }
    
}

export default HomePage;