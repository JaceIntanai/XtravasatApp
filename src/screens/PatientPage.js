import React, { Component } from 'react';
import { Header, Button, Background, BackButton, Textform, TextAge , Msg } from '../components/common'
import { View, StyleSheet, TextInput} from 'react-native';
import { auth } from '../services';

class PatientPage extends Component{
    state = {
        number: '',
        age: '',
        gender: ''
    }

    confirmClick(){
        this.props.navigation.navigate('position');
    }

    render(){
        return (
            <Background>
                <BackButton 
                    goBack={() => this.props.navigation.navigate('home')}
                />
                <Header>ผู้ป่วยใหม่</Header>
                <Msg> หมายเลขอ้างอิง* </Msg>
                <Textform 
                    label="หมายเลขอ้างอิง"
                    placeholder="หมายเลขอ้างอิง"
                />
                <Msg> อายุ* </Msg>
                <TextAge
                    label="อายุ"
                    placeholder="อายุ"
                />
                <Msg> เพศ* </Msg>
                <Textform 
                    label="เพศ"
                    placeholder="เพศ"
                />
                <Msg> สิทธิการรักษา* </Msg>
                <Textform 
                    label="สิทธิการรักษา"
                    placeholder="สิทธิการรักษา"
                />
                <Msg> การวินิจฉัยโรค* </Msg>
                <Textform 
                    label="การวินิจฉัยโรค"
                    placeholder="การวินิจฉัยโรค"
                />
                <Msg> โรคร่วม (Co mobility) * </Msg>
                <Textform 
                    label="โรคร่วม"
                    placeholder="โรคร่วม"
                />
                <Button 
                    mode="contained" 
                    onPress={() => this.confirmClick()}
                >
                    ถัดไป
                </Button>
            </Background>
        );
    } 
}

export default PatientPage;