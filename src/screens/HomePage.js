import React, { Component} from 'react';
import { Logo, Button, Background, LogOutButton , ButtonLink , Header} from '../components/common'
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
            <LogOutButton 
                    goBack={() => this.clickLogout()}
            />
            
            <Header> XtraVasat </Header>
            
            <ButtonLink mode="contained" 
                onPress={() => this.newPatient()}
            >
                ผู้ป่วยใหม่
            </ButtonLink>
            <ButtonLink mode="contained">
                ติดตามประเมินอาการ
            </ButtonLink>
            <ButtonLink mode="contained">
                ประวัติการถ่ายภาพ
            </ButtonLink>
            <ButtonLink mode="contained">
                รายการที่เสร็จสิ้น
            </ButtonLink>
        </Background>
        );
    }
    
}

export default HomePage;