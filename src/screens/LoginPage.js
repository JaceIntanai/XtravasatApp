import React, { Component, useState } from 'react';
import { Logo, Button, Textinput, Background , Msg} from '../components/common';
import { ScrollView } from 'react-native';
import { theme } from '../components/core/theme';

import { auth, styles } from '../services';

class LoginPage extends Component {

    state = { 
        email: '', 
        password: '', 
        error: 'Login Failed!' 
    };

    onLoginPressed() {
        const {email , password} = this.state;

        auth.doSignInWithEmailAndPassword(email, password)
        .catch( error => {
                alert(error)
            }
        )
    };

    render(){
        return (
            <Background>
                <Logo />
                    <Msg> อีเมล </Msg>
                    <Textinput
                        placeholder={'อีเมล'}
                        returnKeyType="next"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <Msg> รหัสผ่าน </Msg>
                    <Textinput
                        placeholder={'รหัสผ่าน'}
                        returnKeyType="done"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
        
                    <Button 
                        mode="contained" 
                        onPress={this.onLoginPressed.bind(this)}
                    >
                        เข้าสู่ระบบ
                    </Button>         
            </Background>
        );
    }
    
};

export default LoginPage;