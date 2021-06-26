import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Header = ({ children }) => (
<View style={styles.container}>
  <Text style={styles.header}>{children}</Text>
</View>

);

const styles = StyleSheet.create({
  // container: {
  //   // marginVertical: 50,
  //   height: 150
  // },
  // header: {
  //   fontSize: 34,
  //   color: theme.colors.primary,
  //   fontWeight: 'bold',
  //   // paddingVertical: 10,
  //   borderColor: '#005daa',
  //   justifyContent: 'flex-end'    
  // },
  container: {
    // flex: 1,
    // backgroundColor: '#005daa',
    width : '100%',
    height : '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,
    // marginVertical: -20,
  },
  header: {
    fontSize: 34,
    paddingTop: 20,

    color: theme.colors.primary,
    // marginTop: 60,
    fontWeight: 'bold',
  },
});

export {Header};
