import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Start = () => (
  <Image source={require('../assets/splash.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export {Start};
