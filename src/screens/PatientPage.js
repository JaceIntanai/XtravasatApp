import React, { Component } from 'react';
import { Header, Button, Background, BackButton, Textinput, TextAge } from '../components/common'
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
                <Textinput 
                    label="หมายเลขอ้างอิง"
                    placeholder="หมายเลขอ้างอิง"
                />
                <TextAge 
                    label="อายุ"
                    placeholder="อายุ"
                />
                <Textinput 
                    label="เพศ"
                    placeholder="เพศ"
                />
                <Textinput 
                    label="สิทธิการรักษา"
                    placeholder="สิทธิการรักษา"
                />
                <Textinput 
                    label="การวินิจฉัยโรค"
                    placeholder="การวินิจฉัยโรค"
                />
                <Textinput 
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