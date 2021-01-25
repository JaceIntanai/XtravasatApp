import React, { memo } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
// import { styles } from '../../services/style';
import { theme } from '../core/theme';

const Position = ({ Children }) => (
    <View style={styles.choiceBar}>
        <Text style={styles.text}>{Children}</Text>
    </View>
);

const styles = StyleSheet.create({
    choiceBar: {
        flex: 1,
    },
    text: {
        fontSize : 40,
    }
});

export {Position};
