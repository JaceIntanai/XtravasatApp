import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';

const Paragraph = ({ hn, children }) => (
  <View style={styles.container}>
  <Text style={styles.text}>{children}</Text>
  <Text style={styles.h2}>{hn}</Text>
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    // textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 14,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    // marginTop: 10,
    flexWrap: 'wrap',
    flex: 1
},
  
});

export {Paragraph};
