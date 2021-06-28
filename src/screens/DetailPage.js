import React, { Component } from 'react';
import { Logo, Button, BackButton, Topbar, Background, Header, Paragraph, ButtonOut,Msg, NextButton } from '../components/common'
import {Image, StyleSheet, Dimensions} from 'react-native';
import { db } from '../services/firebase';
import {db as db_service} from '../services';
class DetailPage extends Component{
    
    state = {
        // position: this.props.navigation.state.params.position,
        // uri: this.props.navigation.state.params.uri,
        // result: this.props.navigation.state.params.result,
        //ต้องได้จาก prop ของหน้า history, trace, success
        uID: this.props.navigation.state.params.uID,
        number: this.props.navigation.state.params.number,
        gender: '',
        age: '',
        doseMg: '',
        doseMl: '',
        drug: '',
        // time_start: snapshot.val().time_start,
        // time_found: snapshot.val().time_found,
        welfare: '',
        status: '',
        result: '',
    }

    async componentDidMount(){
        console.log("Detail Page")
        console.log(this.state.uID, this.state.number)
        await db.ref('user/' + this.state.uID + '/patients/' + this.state.number).on('value', (snapshot) => {
            // const data = [];
            // data.push({
            // number: snapshot.key,
            this.setState({ age: snapshot.val().age, 
                gender : snapshot.val().gender,
                status : snapshot.val().status,
                doseMg : snapshot.val().doseMg,
                doseMl : snapshot.val().doseMl,
                drug : snapshot.val().drug,
                welfare : snapshot.val().welfare,
                result : snapshot.val().result,
            })

            // });
            // this.setState({ data });
            // this.state.data = snapshot;
        });
        // console.log("DetailPage")
        // console.log(this.state.data.val().number)
        // console.log(this.state.data["number"])
        console.log(this.state.age, this.state.gender)
    }

    checkStatus() {
        console.log(this.state.status)
        if(this.state.status){ 
            return(
            <ButtonOut
                onPress={() => this.closeCase()}
            >
                ปิดเคส
            </ButtonOut> 
            )
        }
    }
    closeCase() {
        db_service.updateStatus(this.state.uID, this.state.number)
        // Refresh Screen
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ผลลัพธ์
                </Topbar>
                <NextButton 
                        mode="contained" 
                        onPress={() => this.props.navigation.navigate('recom',{
                            uID : this.props.navigation.state.params.uID,
                            result : this.state.result,
                        })}
                    >
                        แนวทางการรักษา
                    </NextButton>
                <Msg>หมายเลขอ้างอิง : {this.state.number}</Msg>
                <Msg>อายุ : {this.state.age}</Msg>

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