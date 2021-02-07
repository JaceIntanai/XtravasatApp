import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton} from '../components/common'

class HistoryPage extends Component{
    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ประวัติการถ่ายภาพ
                </Topbar>
            </Background>
        );
    }
}


export default HistoryPage;