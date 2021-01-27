import React from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton} from '../components/common'

const HistoryPage = ({ navigation }) =>{
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


export default HistoryPage;