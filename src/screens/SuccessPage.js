import React from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton } from '../components/common'

const SuccessPage = ({ navigation }) =>{
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


export default SuccessPage;