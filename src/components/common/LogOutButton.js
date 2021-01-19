import React from "react";
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { auth } from "../../services/firebase";

const LogOutButton = ({ children, ...props }) => (
  <PaperButton 
    style={styles.button} 
    mode="contained" 
    labelStyle={styles.text}
    {...props}>
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    // left:20,
    // alignItems: "center",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export {LogOutButton};