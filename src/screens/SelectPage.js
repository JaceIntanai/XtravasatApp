import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton } from '../components/common'

class SelectPage extends Component{
    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    SelectPage
                </Topbar>
            </Background>
        );
    }
}


export default SelectPage;