import React, { Component } from 'react';
import {Background , Topbar , BackButton , SelectRec , SelectRec2 , GetDrug , GetGrade , SelectRec3} from '../components/common'
import {recgradedata} from '../components/data';
class RecommentPage extends Component{
    state = {
        show: false,
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
                <SelectRec>
                    {this.state.show ? <SelectRec2>แนวทางการจัดการ extravasation</SelectRec2>: <SelectRec3 onPress={() => { this.setState({ show: false }) }}>แนวทางการจัดการ extravasation</SelectRec3>}
                    {this.state.show ? <SelectRec3 onPress={() => { this.setState({ show: true }) }}>แนวทางการพยาบาล{"\n"}และคำแนะนำ</SelectRec3> : <SelectRec2>แนวทางการพยาบาล{"\n"}และคำแนะนำ</SelectRec2>}
                </SelectRec>
                {/* {this.state.show ? <GetGrade>{recgradedata}</GetGrade> : <GetGrade>{recgradedata}</GetGrade> } */}
            </Background>
        );
    }
}


export default RecommentPage;