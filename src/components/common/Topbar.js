import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Topbar = ({ children }) => (
<View style={styles.container}>
  {children[0]}
  <Text style={styles.header}>{children[1]}</Text>
</View>

);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#005daa',
    width : '120%',
    height : 120,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,
    paddingTop: 10,
    // marginVertical: -20,
  },
  header: {
    
    fontSize: 18,
    color: 'white',
    // marginTop: 60,
    fontWeight: 'bold',
  },
  
});

export {Topbar};
