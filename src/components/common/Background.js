import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const Background = ({ children }) => (
  <ImageBackground
    // source={require('../assets/background_dot.png')}
    // resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: '100%',
    backgroundColor:'#ffffff',
    // minWidth: 340,
  },
  container: {
    // flex: 0.85,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // android:windowSoftInputMode="adjustPan",

  },
});

export {Background};
