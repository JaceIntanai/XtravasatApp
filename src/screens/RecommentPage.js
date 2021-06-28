import React, { Component } from 'react';
import {Background , Topbar , BackButton , SelectRec , SelectRec2 , GetDrug , GetGrade , SelectRec3, Msg} from '../components/common'
import {recgradedata} from '../components/data';
class RecommentPage extends Component{
    state = {
        uID: this.props.navigation.state.params.uID,
        result: this.props.navigation.state.params.result,
        show: false,
        grade: '',
        estimate : [],
        cure : '',

    }

    showrecGradedata () {
        recgradedata.map((dataGrade) => {
            console.log(dataGrade.name , this.state.result)
            if (dataGrade.name == this.state.result){
                console.log(dataGrade.step)
                dataGrade.step.map((label) => {
                    // console.log(label["* ประเมินผิวหนังตำแหน่งที่ให้สารน้ำ"])
                    if (label.label == "* ประเมินผิวหนังตำแหน่งที่ให้สารน้ำ"){
                        console.log(label.label)
                        // this.setState({estimate: label.value})
                    }
                    if (label.label == "การทำแผล"){
                        console.log(label.label)
                        // this.setState({cure: label.value})
                    }
                })

                // this.setState({grade : dataGrade.step})
            }

        })
    }

    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('home')}
                    />
                    คำแนะนำในการดูแล
                </Topbar>
                {/* <SelectRec>
                    {this.state.show ? <SelectRec2>แนวทางการจัดการ extravasation</SelectRec2>: <SelectRec3 onPress={() => { this.setState({ show: false }) }}>แนวทางการจัดการ extravasation</SelectRec3>}
                    {this.state.show ? <SelectRec3 onPress={() => { this.setState({ show: true }) }}>แนวทางการพยาบาล{"\n"}และคำแนะนำ</SelectRec3> : <SelectRec2>แนวทางการพยาบาล{"\n"}และคำแนะนำ</SelectRec2>}
                </SelectRec> */}
                <Msg> {this.state.result} </Msg>
                {this.showrecGradedata()}
                {/* {this.state.show ? <GetGrade>{recgradedata}</GetGrade> : <GetGrade>{recgradedata}</GetGrade> } */}
            </Background>
        );
    }
}


export default RecommentPage;