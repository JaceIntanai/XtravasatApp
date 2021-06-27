import React, { Component } from 'react';
import { Logo, Button, BackButton, Topbar, Background, Header, Paragraph, ButtonOut } from '../components/common'
import {Image, StyleSheet, Dimensions} from 'react-native';

class DetailPage extends Component{
    
    state = {
        // position: this.props.navigation.state.params.position,
        // uri: this.props.navigation.state.params.uri,
        // result: this.props.navigation.state.params.result,
        //ต้องได้จาก prop ของหน้า history, trace, success
        number: '',
        patient: [],
    }

    async componentDidMount(){

        await db.ref('user/' + this.state.uID + '/patients/' + this.state.number).on('value', (snapshot) => {
            const data = [];
            data.push({
            number: snapshot.key,
            status: snapshot.val().status,
            data: snapshot.val()
            });
            this.setState({ patient });
        });
        console.log(this.state.patient)
    }

    checkStatus() {
        if(this.state.patient.status){ 
            return(
            <ButtonOut>
                ปิดเคส
            </ButtonOut> 
            )
        }
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

                {this.checkStatus()}
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