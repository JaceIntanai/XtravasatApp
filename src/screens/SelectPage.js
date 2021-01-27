import React from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton } from '../components/common'

const SelectPage = ({ navigation }) =>{
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


export default SelectPage;