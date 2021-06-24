import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Background, BackButton, Header , Topbar ,CameraSet} from '../components/common'
// import Camera from '../components/Camera';
import ExpoCamera from '../components/ExpoCamera';

class CameraPage extends Component{

  constructor(props){
    super(props);
  }

  state = {
    uri: null,
    position: null,
    uID: this.props.navigation.state.params.uID,
    number: this.props.navigation.state.params.number,
  }

  async componentDidMount(){
    const image_position = this.props.navigation.getParam('image_position',null);
    // console.log(image_position);
    await this.setState({ position: image_position});
    // console.log('CameraPage')
    // console.log(this.state.position);
  }

  setUp = (input) => {
    this.setState({ uri: input });
    // console.log(this.state.uri)
    this.props.navigation.navigate('confirm', {
      image_uri:this.state.uri,
      uID: this.state.uID,
      number: this.state.number,
      position: this.state.position,
    });
  }

  picture = (uri, path) => {
    // console.log('I got uri');

    this.setUp(path);
  }

  render(){

      return (
        <Background>
            <Topbar>
              <BackButton 
                  goBack={() => this.props.navigation.navigate('position')}
              />
              {this.state.position}
            </Topbar>
            <CameraSet>
              <ExpoCamera onCapture={this.picture} imgPosition={this.state.position} />
            </CameraSet>
        </Background>
      ); 
  }
};

export default CameraPage;