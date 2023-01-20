import React, { useState, useNavigation } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions, Alert, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';
import Pressable from '../components/Pressable';

const NewPost = props => {
    const [wish, setWish] = useState('');
    // const navigation = useNavigation();

    const post = {
        Username: props.currentUser,
        Text: wish
    }

    const AddPost = () => {
        fetch('https://zerotoheroapp.azurewebsites.net/api/Posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(() => {
                // clear the text input
                setWish('');
                // nav to Home screen
                // props.navigation.navigate('Home');
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <View style={styles.userBg}>
                <Text style={styles.user}>@{props.currentUser}</Text>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={[styles.input]}
                    placeholder="Type your wish..."
                    multiline={true}
                    onChangeText={(text) => setWish(text)}
                    value={wish}
                    autoCapitalize='sentences'
                    maxLength={350}
                    textAlignVertical='top'
                />

                <Pressable
                    style={{ borderRadius: 4 }}
                    activeOpacity={0.95}
                    onPress={AddPost}
                >
                    <Text style={styles.button}>Post Wish</Text>
                </Pressable>

            </View>

            <NavBar title1='chevron-circle-left' title2='home' title3='user-alt'></NavBar>
        </SafeAreaView>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    userBg: {
        backgroundColor: '#EACBD2',
        width: Dimensions.get('window').width,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    user: {
        color: '#82667F',
        fontSize: 30,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#EACBD2',
        height: '80%',
        marginTop: 10,
        borderRadius: 10,
        fontSize: 20,
        padding: 10,
        marginHorizontal: 10,
    },
    button: {
        fontSize: 30,
        backgroundColor: '#82667F',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#72596F',
        elevation: 5,
    }
});

export default NewPost;