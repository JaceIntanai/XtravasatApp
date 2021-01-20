import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/icon.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    flex: 0,
    width: 250,
    height: 250,
    marginBottom: 12,
  },
});

export {Logo};
