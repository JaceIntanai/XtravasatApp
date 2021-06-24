import React, { Component } from 'react';
import { Logo, Button, BackButton, Topbar, Background, Header, Paragraph } from '../components/common'
import {Image, StyleSheet, Dimensions} from 'react-native';

class DetailPage extends Component{
    
    state = {
        position: this.props.navigation.state.params.position,
        uri: this.props.navigation.state.params.uri,
        result: this.props.navigation.state.params.result
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('patient')}
                    />
                    ผลลัพธ์
                </Topbar>
                
                <Image 
                    source={{uri: this.state.uri}}
                    style={styles.preview} 
                />
                <Paragraph>
                    <Header>{this.state.result}</Header>
                </Paragraph>

                <Button onPress={()=>this.props.navigation.navigate('home')}>
                    ยืนยัน
                </Button>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        height: Dimensions.get('window').height* 0.72,
        width: Dimensions.get('window').width,
    }
});
export default DetailPage;