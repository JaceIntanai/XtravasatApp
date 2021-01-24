import React from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';
// import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const Dropdown = StyleSheet.create({
  dropdown: {
    borderColor: '#6a6e78',
    width : '95%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    // margin : 15,
  }
});

export {Dropdown};
