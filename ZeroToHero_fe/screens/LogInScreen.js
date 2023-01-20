import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions, Alert, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header1';
import Pressable from '../components/Pressable';
import { useEffect } from 'react';

export default Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState({});
    const [hidePassword, setHidePassword] = useState(true);
    const psswdIcon = hidePassword ? 'eye' : 'eye-slash';

    const screenHeight = Dimensions.get('window').height;
    // const navigation = useNavigation();

    const togglePassword = () => {
        setHidePassword(!hidePassword);
    }

    const handleLogin = () => {
        if (username == '' || password == '') {
            Alert.alert('Please enter username and password');
        } else {
            fetch('https://zerotoheroapp.azurewebsites.net/api/Users/' + {username} )
                .then(response => { return response.json() })
                .then(responseJson => {
                    setProfile([responseJson]);
                    const user = profile.find(user => user.password === password);
                    console.log(user);
                    if (user) {
                        Alert.alert('Logged in successfully');
                        // navigation.navigate('Home');
                    } else {
                        Alert.alert('Wrong password');
                    }
                });
        }
    }

    const joinUs = () => {
        Alert.alert('Join us');
        props.navigation.navigate('SignUp');
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
                                        <Icon name={psswdIcon} size={30} color='#454545' />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 10, borderWidth: 2, borderRadius: 5, borderColor: '#72596F', elevation: 5 }}>
                                    <Button title="Log In" color="#82667F" onPress={handleLogin} />
                                </View>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                    <View>
                                        <Text style={{ width: 130, textAlign: 'center' }}>Or continue with</Text>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                </View>

                                <Pressable
                                    style={{ borderRadius: 4 }}
                                    activeOpacity={0.9}
                                    onPress={() => { Alert.alert('Feature unavailable at the moment. We\'re sorry :)') }}
                                >
                                    <Icon name="google" style={styles.icon}>
                                        <Text style={styles.text} />
                                    </Icon>
                                </Pressable>
                            </View>


                            <View style={styles.bottom}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                    <Pressable onPress={() => { joinUs }}>
                                        <Text style={styles.joinUs}>Join us</Text>
                                    </Pressable>
                                    <Text style={styles.text}> today and become</Text>
                                </View>

                                <Text style={styles.text}> someone's hero!</Text>
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
    icon: {
        fontSize: 30,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: '#DFDFDF',
        elevation: 5,
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
        textDecorationLine: 'underline'
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
