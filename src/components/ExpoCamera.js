import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, Alert, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

class ExpoCamera extends Component {

    constructor(props){
        super(props);
    }

    state = {
      hasPermission: null,
      cameraType: Camera.Constants.Type.back,
      uri: '',
      position_select: this.props.imgPosition,
      path: '',
      date: Date.now(),
    }
  
    async componentDidMount() {
      this.getPermissionAsync()
    }

    async cameraRoll(){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');   
      }
    }
  
    getPermissionAsync = async () => {
      // Camera roll Permission 
      this.cameraRoll();
      
      // Camera Permission
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasPermission: status === 'granted' });

      // File System 
      FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'xtraphotos/').catch(e => {
          console.log(e, 'Directory exists');

      });

      await this.setState({ position_select: this.props.imgPosition });
    }
  
  
    takePicture = async () => {
        const position = this.state.position_select
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            Alert.alert('Success', JSON.stringify(photo));
            this.setState({ uri: photo.uri });

            await this.setState({ date: Date.now() });

            let p = position.replace(/\s/g, "");

            await FileSystem.copyAsync({
                from: photo.uri,
                to: `${FileSystem.documentDirectory}xtraphotos/${p}_${this.state.date}.jpg`
            });
            await this.setState({ path: `${FileSystem.documentDirectory}xtraphotos/${p}_${this.state.date}.jpg` });

            this.props.onCapture(this.state.uri, this.state.path);
      }
    }
  

    renderImage = () => {

        var img;
        const position = this.state.position_select;

        switch (position) {
            case 'Left Hand': img = require('./assets/hand.png'); break;
            case 'Right Hand': img = require('./assets/hand.png'); break;
            case 'Left Arm': img = require('./assets/arm.png'); break;
            case 'Right Arm': img = require('./assets/arm.png'); break;
            case 'Left Leg': img = require('./assets/arm.png'); break;
            case 'Right Leg': img = require('./assets/arm.png'); break;
            case 'Left Foot': img = require('./assets/foot.png'); break;
            case 'Right Foot': img = require('./assets/foot.png'); break;
            default: img = require('./assets/hand.png'); break;
        }
        return (
            <View>
                <Image source={img} resizeMode='stretch' style={styles.mask} />
            </View>
        );
    }

    renderMarks = () => {

        return (
            <View style={styles.maskBar} >
                {this.renderImage()}
            </View>
        );

    }

    render(){
        const { hasPermission } = this.state
        if (hasPermission === null) {
        return <View />;
        } else if (hasPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera 
                        style={{ flex: 1 }} 
                        type={this.state.cameraType}  
                        ref={ref => {this.camera = ref}}
                        ratio={'16:9'}
                    >
                        {this.renderMarks()}
                    </Camera>
                    <TouchableOpacity
                        style={styles.bottomBar}
                        onPress={()=>this.takePicture()}
                        >
                        <FontAwesome
                            name="camera"
                            style={{ color: "#fff", fontSize: 40, marginTop: 30}}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        //paddingTop: isIPhoneX ? 500 : 350,
        // paddingBottom: isIPhoneX ? 30 : 20,
        backgroundColor: 'black',
        justifyContent: 'space-around',
        flex: 0.3,
        flexDirection: 'row',
    },
    maskBar: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    mask: {
        height: Dimensions.get('window').height* 0.72,
        width: Dimensions.get('window').width,

    },
});

export default ExpoCamera;