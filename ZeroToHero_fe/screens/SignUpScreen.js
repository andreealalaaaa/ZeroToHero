import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalDropdown from 'react-native-modal-dropdown';
import countries from 'countries-list';



import Header from '../components/Header1';
import Pressable from '../components/Pressable';

export default SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [selectedAge, setSelectedAge] = useState('18');

    const screenHeight = Dimensions.get('window').height;
    const ages = Array.from({ length: 83 }, (v, k) => k + 18);
    const ageOptions = ages.map(age => age.toString());
    const countriesOptions = Object.values(countries.countries).map(country => country.name);

    const nextPage = () => {
        if (email == '' || name == '' || country == '' || selectedAge == '') {
            Alert.alert('Please enter all fields');
        } else {
            Alert.alert('Next page');
            props.navigation.navigate('SignUp2');
        }
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
                                    placeholder="Email"
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    inputMode='email'
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    onChangeText={(text) => setName(text)}
                                    value={name}
                                />

                                <ModalDropdown
                                    key={1}
                                    style={styles.input}
                                    textStyle={styles.text}
                                    defaultValue={country}
                                    options={countriesOptions}
                                    onSelect={(index, value) => setCountry(value)}
                                    animated={true}
                                    isFullWidth={true}
                                    dropdownStyle={styles.dropdown}
                                    saveScrollPosition={true}
                                >
                                    <Text>Country: {country}</Text>
                                </ModalDropdown>

                                <ModalDropdown
                                    key={2}
                                    style={styles.input}
                                    textStyle={styles.text}
                                    defaultValue={selectedAge}
                                    options={ageOptions}
                                    onSelect={(index, value) => setSelectedAge(value)}
                                    animated={true}
                                    isFullWidth={true}
                                    dropdownStyle={styles.dropdown}
                                    saveScrollPosition={true}
                                >
                                    <Text>Age: {selectedAge}</Text>
                                </ModalDropdown>

                                <View style={{ marginTop: 10, borderWidth: 2, borderRadius: 5, borderColor: '#72596F', elevation: 5 }}>
                                    <Button title="Next" color="#82667F" onPress={nextPage} />
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
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 5,
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
