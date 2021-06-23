import React from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const Dropdown = StyleSheet.create({
  dropdown: {
    borderColor: '#6a6e78',
    backgroundColor: 'transparent',
    width : '95%',
    height : 50,
    borderWidth: 1,
    borderRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginHorizontal: 5,
    // borderBottomColor: 'transparent'
    // paddingHorizontal: 10,
    // margin : 15,
  }
});

export {Dropdown};
