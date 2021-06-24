import React, { memo } from 'react';
import { StyleSheet} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

const ButtonOut = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    backgroundColor: '#B6452C',
    borderRadius: 10,
    height: 100,
    width: 300,
  },
  text: {
    marginVertical: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 26,
  },
});

export {ButtonOut};
