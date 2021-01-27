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

    tracePatient(){
        this.props.navigation.navigate('trace')
    }
    historyPatient(){
        this.props.navigation.navigate('history')
    }

    successPatient(){
        this.props.navigation.navigate('success')
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
            <ButtonLink mode="contained"
                onPress={() => this.tracePatient()}
            >
                ติดตามประเมินอาการ
            </ButtonLink>
            <ButtonLink mode="contained"
                onPress={() => this.historyPatient()}
            >
                ประวัติการถ่ายภาพ
            </ButtonLink>
            <ButtonLink mode="contained"
                onPress={() => this.successPatient()}
            >
                รายการที่เสร็จสิ้น
            </ButtonLink>
        </Background>
        );
    }
    
}

export default HomePage;