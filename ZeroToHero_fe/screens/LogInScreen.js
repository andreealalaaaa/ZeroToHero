import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Header from '../components/Header';
import Pressable from '../components/Pressable';

export default Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const screenHeight = Dimensions.get('window').height;

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
                                    placeholder="Email/Username"
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={(text) => setPassword(text)}
                                    value={password}
                                />

                                <View>
                                    <Button title="Log In" color="#82667F" onPress={() => { }} />
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
                                >
                                    <Icon name="google" style={styles.icon}>
                                        <Text style={styles.text} />
                                    </Icon>
                                </Pressable>
                            </View>


                            <View style={styles.bottom}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                    <Pressable onPress={() => { }}>
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
    icon: {
        fontSize: 30,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginVertical: 20,
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
    }
});
