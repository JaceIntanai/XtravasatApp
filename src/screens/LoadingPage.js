import React, { Component } from 'react';
import { Logo, Button, Background, Header } from '../components/common'

class LoadingPage extends Component{
    render(){
        return (
            <Background>
                <Header>โหลดจ้า</Header>
                <Button onPress={()=>this.props.navigation.navigate('detail')}>ยืนยัน</Button>
            </Background>
        );
    }
}
    


export default LoadingPage;