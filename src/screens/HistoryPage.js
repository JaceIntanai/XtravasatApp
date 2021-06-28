import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton, ShowDetail, ButtonLink,Msg} from '../components/common'
import { StyleSheet, Image, Dimensions, Platform} from 'react-native';
import { db } from '../services/firebase';
import { createIconSetFromFontello } from 'react-native-vector-icons';

class HistoryPage extends Component{

    state = {
        uID: this.props.navigation.state.params.uID,
        image: '',
        position: '',
        result: '',
        data:[],
    }

    async componentDidMount(){

        await db.ref('user/' + this.state.uID + '/patients/').on('value', (snapshot) => {
            // console.log(snapshot.val())
            // let image = snapshot.val().image;
            // let position = snapshot.val().position;
            // // console.log(image, position)
            // this.setState({ image: uploadUri , position: position})
            // console.log(this.state)
            const data = [];
            console.log("childSnap")
            snapshot.forEach(function(childSnap) {
                // const images = childSnap.val().image;
                // const images = Platform.OS === 'ios' ? images.replace('file://', '') : images;
                data.push({
                number: childSnap.val().number,
                img: childSnap.val().image,
                welfare: childSnap.val().welfare,
                // etc: childSnap.val()
                });
            });
            this.setState({ data });
        });
        console.log(this.state.data)
        // console.log(this.state.image, this.state.position)
    }

    renderData() {
        return this.state.data.map((item) => {
            return (
                <ButtonLink 
                    // style={}
                    onPress={() => this.confirmClick(item.number)}
                    // onPress={}
                >
                    หมายเลขอ้างอิง : {item.number}{"\n"}
                    {/* สิทธิการรักษา : {item.welfare}{"\n"} */}
                </ButtonLink>
            );
        });
    }

    confirmClick(patient){
        console.log(patient)
        this.props.navigation.navigate('detail', {
            number: patient,  
            uID: this.state.uID,
        });
    }


    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ประวัติการถ่ายภาพ
                </Topbar>
                {/* <ShowDetail>
                    <Image 
                        source={{uri: this.state.image}}
                        style={styles.preview} 
                    />
                </ShowDetail> */}
                {this.renderData()}
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

export default HistoryPage;