import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity , Dimensions} from 'react-native';


const SelectRec = ({ children }) => (
    <View style={styles.container}>
        <View style={styles.navBar}>
            {children[0]}
            {children[1]}
        </View>
    </View>
    
);

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    navBar: {
        flexDirection: 'row',
        flex: 0.15,
        justifyContent: 'space-between',
      },
    nav: {
        backgroundColor: '#F5F7F4',
        width: Dimensions.get('window').width / 2,
        borderColor: '#005daa',
        justifyContent: 'center',
        alignItems: 'center',
      },
    nav2: {
        backgroundColor: '#F5F7F4',
        width: Dimensions.get('window').width / 2,
        borderColor: '#005daa',
        borderBottomWidth: 3,
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

export {SelectRec};
