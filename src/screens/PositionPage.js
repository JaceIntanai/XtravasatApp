import React, { Component } from 'react';
import { Button , Background , BackButton , Topbar , SubPosition , Position} from '../components/common'
// import { Button } from 'react-native-elements';
class PositionPage extends Component{

    state = {
        position: null,
    }

    async onClick(select){
        await this.setState({ position: select });
        this.props.navigation.navigate('cameraP', { image_position: this.state.position });
    };


    render(){
        return (
            <Background>
                <Topbar>
                    <BackButton 
                        goBack={() => this.props.navigation.navigate('patient')}
                    />
                    ตำแหน่งที่ต้องการถ่าย
                </Topbar>
                <Position>
                    มือซ้าย
                    {/* <SubPosition>
                        <Button
                            mode="contained" 
                            onPress={()=>this.onClick('Left Hand')}
                        >
                        มือซ้าย
                        </Button>
                    </SubPosition> */}
                    {/* <SubPosition>
                        <Button
                            mode="contained" 
                            onPress={()=>this.onClick('Left Hand')}
                        >
                            มือซ้าย
                        </Button>
                    </SubPosition> */}
                </Position>
                {/* <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Left Hand')}
                >
                    มือซ้าย
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Right Hand')}
                >
                    มือขวา
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Left Arm')}
                >
                    แขนซ้าย
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Right Arm')}
                >
                    แขนขวา
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Left Leg')}
                >
                    ขาซ้าย
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Right Leg')}
                >
                    ขาขวา
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Left Foot')}
                >
                    เท้าซ้าย
                </Button>
                <Button
                    mode="contained" 
                    onPress={()=>this.onClick('Right Foot')}
                >
                    เท้าขวา
                </Button> */}
            </Background>
        );
    }
}

export default PositionPage;