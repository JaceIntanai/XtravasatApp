import React, { memo } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
// import { styles } from '../../services/style';
import { theme } from '../core/theme';

const Position = ({ children }) => (
    <View style={styles.choiceBar}>
        <View style={styles.subContainer}>
            {children[0]}
            {children[1]}
        </View>
        <View style={styles.subContainer}>
            {children[2]}
            {children[3]}
        </View>
        <View style={styles.subContainer}>
            {children[4]}
            {children[5]}
        </View>
        <View style={styles.subContainer}>
            {children[6]}
            {children[7]}
        </View>
    </View>
);

const styles = StyleSheet.create({
    choiceBar: {
        marginTop : 20,
        // flex: 0.87,
        flex: 1,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#F5F7F4',
    },
});

export {Position};
