import React, { Component } from 'react';
import {Background , Topbar , BackButton} from '../components/common'
import { db } from '../services/firebase';

class TracePage extends Component{

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
                if (childSnap.val().status == "true") {
                    data.push({
                    number: childSnap.val().number,
                    img: childSnap.val().image,
                    welfare: childSnap.val().welfare,
                    // etc: childSnap.val()
                    });
                }
                    
            });
            this.setState({ data });
        });
        console.log(this.state.data)
    }

    renderData() {
        return this.state.data.map((item) => {
            return (
                <ButtonLink 
                    // style={}
                    onPress={item.number}
                >
                    หมายเลขอ้างอิง : {item.number}{"\n"}
                    {/* สิทธิการรักษา : {item.welfare}{"\n"} */}
                </ButtonLink>
            );
        });
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    ติดตามประเมินอาการ
                </Topbar>

                {this.renderData()}
            </Background>
        );
    }
}


export default TracePage;