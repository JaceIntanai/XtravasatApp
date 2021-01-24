import React, { memo } from 'react';
import { StyleSheet} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

const NextButton = ({ mode, style, children, ...props }) => (
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
    backgroundColor: '#B6452C',
    borderColor: '#B6452C',
    borderRadius: 5,
    height: 50,
    marginVertical: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export {NextButton};
