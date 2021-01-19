import React from 'react';
import { Logo, Button, Background, Header, Paragraph } from '../components/common'

const DetailPage = ({ navigation }) =>{
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


export default DetailPage;