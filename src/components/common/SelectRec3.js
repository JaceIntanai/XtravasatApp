import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Dimensions} from 'react-native';


const SelectRec3 = ({ children }) => (
    <View>
        <TouchableOpacity style={styles.nav}>
            <Text style={styles.subheader}>{children}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#F5F7F4',
        width: Dimensions.get('window').width / 2,
        height: 100,
        borderColor: '#005daa',
        justifyContent: 'center',
        alignItems: 'center',
      },
    nav2: {
        backgroundColor: '#F5F7F4',
        width: Dimensions.get('window').width / 2,
        borderColor: '#005daa',
        borderBottomWidth: 3,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
    subheader: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
      },
    subheader2: {
        fontSize: 16,
        color: '#005daa',
        textAlign: 'center',
        fontWeight: 'bold'
      }
});

export {SelectRec3};
