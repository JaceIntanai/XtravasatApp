import React, { memo } from 'react';
import { View , StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Subheader = ( ) => (
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={[styles.subheader, { flex: 0.5 }]}> อายุ *</Text>
    <Text style={[styles.subheader, { flex: 0.5 }]}> เพศ *</Text>
    {/* <Text style={[styles.subheader, { flex: 0.5 }]}>{children2} *</Text> */}
</View>
);

const styles = StyleSheet.create({
    subheader: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 10,
        // color: 'black',
        color: '#005daa',
        // marginTop: 15,
    },
});

export {Subheader};
