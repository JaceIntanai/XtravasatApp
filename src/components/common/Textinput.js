import React from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';
// import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const Textinput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      // selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    height: 45,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: '#005daa',
    borderWidth: 1,

  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export {Textinput};
