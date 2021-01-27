import React from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton} from '../components/common'

const TracePage = ({ navigation }) =>{
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


export default TracePage;