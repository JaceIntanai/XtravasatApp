import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton } from '../components/common'


class SuccessPage extends Component{
    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    รายการที่เสร็จสิ้น
                </Topbar>
            </Background>
        );
    }
}


export default SuccessPage;