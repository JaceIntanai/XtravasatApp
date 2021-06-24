import React, { Component } from 'react';
import { Button , Background , BackButton , Topbar , SubPosition , Position } from '../components/common'
// import { Button } from 'react-native-elements';
class PositionPage extends Component{

    state = {
        position: null,
        uID: this.props.navigation.state.params.uID,
        number: this.props.navigation.state.params.number,
    }

    async onClick(select){
        await this.setState({ position: select });
        this.props.navigation.navigate('cameraP', { 
            image_position: this.state.position,
            uID: this.state.uID,
            number: this.state.number,
        });
    };


    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('sub')}
                    />
                    ตำแหน่งที่ต้องการถ่าย
                </Topbar>
                <Position>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Left Hand')}
                    >
                        มือซ้าย
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Right Hand')}
                    >
                        มือขวา
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Left Arm')}
                    >
                        แขนซ้าย
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Right Arm')}
                    >
                        แขนขวา
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Left Leg')}
                    >
                        ขาซ้าย
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Right Leg')}
                    >
                        ขาขวา
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Left Foot')}
                    >
                        เท้าซ้าย
                    </SubPosition>
                    <SubPosition
                        mode="contained" 
                        onPress={()=>this.onClick('Right Foot')}
                    >
                        เท้าขวา
                    </SubPosition>
                </Position>
            </Background>
        );
    }
}

export default PositionPage;