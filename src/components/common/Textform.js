import React from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';
// import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const Textform = ({ errorText, ...props }) => (
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
    width: '97.5%',
    marginTop: 15,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#6a6e78',
    paddingLeft: 5,
    borderRadius: 10,
    height: 50,
    color: 'black',
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export {Textform};
