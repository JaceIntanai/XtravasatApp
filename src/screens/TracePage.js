import React, { Component } from 'react';
import {Background , Topbar , BackButton} from '../components/common'

class TracePage extends Component{
    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ติดตามประเมินอาการ
                </Topbar>
            </Background>
        );
    }
}


export default TracePage;