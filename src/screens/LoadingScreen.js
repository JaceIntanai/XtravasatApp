import React, { Component } from 'react';
import { Background, Spinner } from '../components/common'

import { auth } from '../services/firebase';

class LoadingScreen extends Component{

    state = {
        uID: ''
    }

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        auth.onAuthStateChanged(function(user){
            
            
            if(user){
                // console.log("User here -------------------------------")
                // console.log(user.uid);
                this.state.uID = user.uid
                // console.log(this.state.uID)
                this.props.navigation.navigate('home',{
                    uID: this.state.uID
                });
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