import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const LogOutButton = ({goBack}) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/logout.jpg')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginVertical : -20,
    width: '30%',
    left: 165,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export {LogOutButton};