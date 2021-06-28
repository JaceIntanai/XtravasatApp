import React, { Component } from 'react';
import { Logo, Button, Background, Header , Topbar , BackButton, ButtonLink } from '../components/common'
import { db } from '../services/firebase';

class SuccessPage extends Component{
    
    state = {
        uID: this.props.navigation.state.params.uID,
        // uID: 'NZQnHj3RjzSoWQkWiez7MdD097F2',
        image: '',
        position: '',
        result: '',
        data:[],
    }

    async componentDidMount(){
        console.log(this.state.uID)
        await db.ref('user/' + this.state.uID + '/patients/').on('value', (snapshot) => {
            console.log(snapshot.val)
            // let image = snapshot.val().image;
            // let position = snapshot.val().position;
            // // console.log(image, position)
            // this.setState({ image: uploadUri , position: position})
            // console.log(this.state)
            const data = [];
            console.log("childSnap")
            snapshot.forEach(function(childSnap) {
                if (childSnap.val().status === false) {
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
                    รายการที่เสร็จสิ้น
                </Topbar>

                {this.renderData()}

            </Background>
        );
    }
}


export default SuccessPage;