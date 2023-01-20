import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions, Alert, Switch, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';


import Header from '../components/Header1';
import Pressable from '../components/Pressable';

const SignUpNext = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const psswdIcon = hidePassword ? 'eye' : 'eye-slash';

    const userProfile = {
        Username: username,
        Password: password,
        Email: props.email,
        FirstName: props.name,
        LastName: 'Gica',
        Country: props.country,
        Age: props.selectedAge
    }
    
    const screenHeight = Dimensions.get('window').height;

    const togglePassword = () => {
        setHidePassword(!hidePassword);
    }

    const Register = () => {
        fetch('https://zerotoheroapp.azurewebsites.net/api/Users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(() => {
                // nav to Home screen
                props.navigation.navigate('Home');
            });
    }

    const loginHere = () => {
        // Alert.alert('Login here');
        props.navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DFAEB4' }}>
            <KeyboardAwareScrollView contentContainerStyle={{ minHeight: screenHeight }} >
                <ImageBackground
                    source={require('../assets/images/LoginScreen.png')}
                    style={{ flex: 1, width: '100%', height: screenHeight, resizeMode: 'cover', backgroundColor: 'transparent' }}
                >

                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignContent: 'center' }}>
                        <Header title="ZeroToHero" />

                        <View style={styles.container}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Username"
                                    onChangeText={(text) => setUsername(text)}
                                    value={username}
                                />

                                <View style={styles.pssw}>
                                    <TextInput
                                        style={styles.inputPsswd}
                                        placeholder="Password"
                                        secureTextEntry={hidePassword}
                                        onChangeText={(text) => setPassword(text)}
                                        value={password}
                                    />
                                    <TouchableOpacity onPress={togglePassword} style={styles.showpsswd}>
                                        <Icon name={psswdIcon} size={30} color='#454545'/>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                    <Switch
                                        value={isEnabled}
                                        onValueChange={setIsEnabled}
                                        trackColor={{ true: '#82667F', false: 'white' }}
                                        thumbColor={isEnabled ? 'white' : '#82667F'}
                                    />
                                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, alignSelf: 'center' }}> I agree to be a ZeroToHero member.</Text>
                                </View>

                                <View style={{ marginTop: 10, borderWidth: 2, borderRadius: 5, borderColor: '#72596F', elevation: 5 }}>
                                    <Button title="Register" color="#82667F" onPress={Register} />
                                </View>

                            </View>

                            <View style={styles.bottom}>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                                    <Text style={styles.text}> Already with us?</Text>

                                    <Pressable onPress={loginHere}>
                                        <Text style={styles.joinUs}>Login here!</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>

                </ImageBackground>
            </KeyboardAwareScrollView>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        maxWidth: '80%',
        marginVertical: 10,
    },
    input: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 10,
    },
    inputPsswd: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'transparent',
        width: '87%',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
    },
    joinUs: {
        fontSize: 25,
        textAlign: 'center',
        color: '#82667F',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    bottom: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
    },
    pssw: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    showpsswd: {
        paddingVertical: 10,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: 'transparent',
    }
});

export default SignUpNext;