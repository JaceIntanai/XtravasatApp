import React from 'react';
import { Logo, Button, Background, Header } from '../components/common'

const ConfirmPage = ({ navigation }) =>{
    return (
        <Background>
            <Header>โหลดจ้า</Header>
            <Button onPress={()=>navigation.navigate('detail')}>ยืนยัน</Button>
        </Background>
    );
}


export default ConfirmPage;