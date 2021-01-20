import React, { memo } from 'react';
import { StyleSheet , Text } from 'react-native';
import { auth } from "../../services/firebase";

const Msg = ({ children }) => (<Text style={styles.message}>{children}</Text>);

const styles = StyleSheet.create({
    message: {
        alignSelf : 'flex-start',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#005daa',
    }, 
});
  
export {Msg};