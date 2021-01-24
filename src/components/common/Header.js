import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Header = ({ children }) => (
<View style={styles.container}>
  <Text style={styles.header}>{children}</Text>
</View>

);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    fontSize: 34,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  
});

export {Header};
