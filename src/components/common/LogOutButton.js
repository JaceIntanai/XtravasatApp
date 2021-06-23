import React from 'react';
import { TouchableOpacity, Image, StyleSheet , View} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const LogOutButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/logout.jpg')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    // marginTop: '10%',
    marginVertical : -20,
    // width: '30%',
    alignSelf: 'flex-end',
    // left: 165,
  },
  image: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  
});

export {LogOutButton};