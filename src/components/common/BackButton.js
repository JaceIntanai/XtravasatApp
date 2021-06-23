import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialIcons } from '@expo/vector-icons';
const BackButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    {/* <Image style={styles.image} source={require('../assets/arrow_back.png')} /> */}
    <MaterialIcons style={styles.backPage} name="arrow-back" size={30} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: 10 + getStatusBarHeight(),
    // left: 10,
    alignSelf: 'flex-start',
    padding: 15,
    paddingTop: 25,
  },
  backPage: {
    // position:'relative',
    // marginTop: 5,
    marginLeft : '20%',
    width: 30,
    height: 30,
  },
});

export {BackButton};
