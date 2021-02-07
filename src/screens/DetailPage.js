import React, { Component } from 'react';
import { Logo, Button, Background, Header, Paragraph } from '../components/common'

class DetailPage extends Component{
    render(){
        return (
            <Background>
                <Header>ผลลัพธ์</Header>
                <Logo />
                <Paragraph>Mild</Paragraph>
                <Button onPress={()=>navigation.navigate('home')}>
                    ยืนยัน
                </Button>
            </Background>
        );
    }
}


export default DetailPage;