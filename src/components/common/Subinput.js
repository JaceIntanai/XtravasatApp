import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Subinput = ({ children }) => (
<View style={styles.container}>
    <View style={styles.subcontainer}>
        {children[0]}
        <Text style={styles.subheader}>{children[1]}</Text>
    </View>
    <View style={{ flex: 0.5 }}>
        {children[2]}
    </View>
</View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 15,
    },
    subcontainer: {
        flexDirection: 'row', 
        flex: 0.5
    },
    subheader: {
        fontSize: 16,
        // marginBottom: 10,
        color: '#005daa',
        marginTop: 15,
        marginLeft: 10, 
        fontWeight: 'normal' 
    },
});
export {Subinput};
