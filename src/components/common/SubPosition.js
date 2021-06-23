import React, { memo } from 'react';
import { StyleSheet, View , Dimensions , Text} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
// import { styles } from '../../services/style';
import { theme } from '../core/theme';

const SubPosition = ({ mode, style, children, ...props }) => (
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
        borderColor: '#6a6e78',
        borderWidth: 1,
        width: Dimensions.get('window').width / 2 - 15,
        height: Dimensions.get('window').height / 4 - 45,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        
    },
    text:{
        fontWeight: 'bold',
        // textAlign: 'center',
        fontSize: 23,
        // marginTop: Dimensions.get('window').height / 16,
        justifyContent: 'center',
        color: 'black',
        paddingVertical: 50,
    }
});

export {SubPosition};
