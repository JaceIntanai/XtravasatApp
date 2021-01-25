import React, { memo } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
// import { styles } from '../../services/style';
import { theme } from '../core/theme';

const SubPosition = ({ Children }) => (
    <View style={styles.subContainer}>
        <Text style={styles.text}>{Children}</Text>
    </View>
);

const styles = StyleSheet.create({
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#F5F7F4',
    },
    text: {
        fontSize: 40,
        color: '#000000',
    }
});

export {SubPosition};
