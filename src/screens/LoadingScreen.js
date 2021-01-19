import React, { Component } from 'react';
import { Background, Spinner } from '../components/common'

import { auth } from '../services/firebase';

class LoadingScreen extends Component{

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        auth.onAuthStateChanged(function(user){
            console.log(user);
            if(user){
                this.props.navigation.navigate('home');
            }
            else{
                this.props.navigation.navigate('login');
            }
        }.bind(this))
    }
    render(){
        return (
            <Background>
                <Spinner />
            </Background>
        );
    }
    
}


export default LoadingScreen;