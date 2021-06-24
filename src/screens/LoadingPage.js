import React, { Component } from 'react';
import { Logo, Button, Background, Header } from '../components/common'


class LoadingPage extends Component{
    state = {
        uID: this.props.navigation.state.params.uID,
        number: this.props.navigation.state.params.number,
        uri: this.props.navigation.state.params.uri,
        position: this.props.navigation.state.params.position,
        result: ''
    }

    updateData = () => {
        this.props.navigation.navigate('detail',{
            position: this.state.position,
            uri: this.state.uri,
            result: this.state.result
        })
    }

    render(){
        return (
            <Background>
                <Header>โหลดจ้า</Header>
                <Button onPress={()=> this.updateData()}>
                ยืนยัน
                </Button>
            </Background>
        );
    }
}
    


export default LoadingPage;