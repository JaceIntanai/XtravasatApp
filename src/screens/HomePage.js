import React, { Component} from 'react';
import { Logo, Button, Background, LogOutButton , ButtonLink , Header} from '../components/common'
import { auth } from '../services';
import { View } from 'react-native';

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
    recom(){
        this.props.navigation.navigate('recom')
    }
    render(){
        return (
        <Background style={{width: 440}}>
            <LogOutButton 
                    goBack={() => this.clickLogout()}
            />
            
            <Header> XtraVasat </Header>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#005daa', height: 1, flex: 1, }} />
            </View>
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
            <ButtonLink mode="contained"
                onPress={() => this.recom()}
            >
                recom
            </ButtonLink>
        </Background>
        );
    }
    
}

export default HomePage;