import React, { Component } from 'react';
import { Logo, Button, BackButton, Topbar, Background, Header, Paragraph } from '../components/common'

class DetailPage extends Component{
    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('patient')}
                    />
                    ผลลัพธ์
                </Topbar>
                
                <Logo />
                <Paragraph>
                {/* <Text>{hn}</Text> */}
                    Mild
                </Paragraph>

                

                <Button onPress={()=>this.props.navigation.navigate('home')}>
                    ยืนยัน
                </Button>
            </Background>
        );
    }
}


export default DetailPage;