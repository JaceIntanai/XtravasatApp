import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={'large'} color="#0000ff" />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center'
    }
};

export { Spinner };