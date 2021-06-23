import React from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';

const CameraSet = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
  );
const styles = StyleSheet.create({
    container : {
        paddingTop: 20, 
        flex: 2,
    },
});

export {CameraSet};
