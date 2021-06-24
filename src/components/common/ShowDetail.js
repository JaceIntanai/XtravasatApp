import React, { memo } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

const ShowDetail = ({ mode, uri, style, children, ...props }) => (
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
      <Image 
        source={{uri: uri}}
      />
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    backgroundColor: '#005daa',
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

export {ShowDetail};
