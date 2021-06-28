import React, { Component} from 'react';
import { Logo, Button, Background, ButtonOut , ButtonLink , Header, Topbar, form} from '../components/common'
import { auth } from '../services';
import { View, ScrollView, Text } from 'react-native';

class HomePage extends Component{

    clickLogout(){
        auth.doSignOut();
        this.props.navigation.navigate('login')
    }

    newPatient(){
        this.props.navigation.navigate('patient',{
            uID : this.props.navigation.state.params.uID
        })
    }

    tracePatient(){
        this.props.navigation.navigate('trace',{
            uID : this.props.navigation.state.params.uID
        })
    }
    
    historyPatient(){
        this.props.navigation.navigate('history',{
            uID : this.props.navigation.state.params.uID
        })
    }

    successPatient(){
        this.props.navigation.navigate('success',{
            uID : this.props.navigation.state.params.uID
        })
    }
    recom(){
        this.props.navigation.navigate('recom')
    }
    render(){
        return (
        <Background>
            <Header><Text>XtraVasat</Text></Header>
            
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#005daa', height: 2, flex: 1, }} />
            </View>
            <ScrollView>

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

                <ButtonOut mode="contained"
                    onPress={() => this.clickLogout()}
                >
                    ออกจากระบบ
                </ButtonOut>
                            
            </ScrollView>
        </Background>
        );
    }
    
}

export default HomePage;