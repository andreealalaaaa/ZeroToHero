import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const LogInScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Log In Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LogInScreen;