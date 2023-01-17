import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

import Header from './components/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const screen = Dimensions.get('screen');

    return (
      <View style={{flex: 1, backgroundColor: '#DFAEB4', alignContent: 'center'}}>
        <Header title="ZeroToHero" />

        <View style={styles.container}>  
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Email/Username" 
                    onChangeText={(text) => setEmail(text)} 
                    value={email} 
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    onChangeText={(text) => setPassword(text)} 
                    value={password} 
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Log In" color="#82667F" onPress={() => {}} />
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFAEB4',
    },
    inputContainer: {
        width: '80%',
        maxWidth: '80%',
        marginVertical: 10,
        top: '-10%',
    },
    input: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    buttonContainer: {
        width: '80%',
        maxWidth: '80%',
        marginVertical: 10,
        top: '-10%',
    }
});

export default Login;