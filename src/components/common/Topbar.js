import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Topbar = ({ children }) => (
<View style={styles.container}>
  {children}
  <Text style={styles.header}>ผู้ป่วยใหม่</Text>
</View>

);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005daa',
    width : 400,
    height : 120,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginVertical: -20,
  },
  header: {
    fontSize: 18,
    color: 'white',
    marginTop: 60,
    fontWeight: 'bold',
  },
  
});

export {Topbar};
