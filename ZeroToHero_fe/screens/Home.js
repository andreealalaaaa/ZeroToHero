import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

export default Home = () => {
    const [posts, setPosts] = useState([]);
    db = [{ "username": "emartuica", "text": "heihei", "postId": 2 }, { "username": "andreealalaaaa", "text": "heiheihei", "postId": 3 }, { "username": "andreealalaaaa", "text": "heiheiheihei", "postId": 4 }, { "username": "andreealalaaaa", "text": "heiheiheiheihei", "postId": 5 }]
    // useEffect(() => {
    //     // fetch('https://zerotoheroapp.azurewebsites.net/api/Posts')
    //         .then(response => { return response.json() })
    //         .then(responseJson => {
    //             setPosts(responseJson);
    //         }
    //         );
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <ScrollView contentContainerStyle={styles.container}>
                {db.map((item) => {
                    return (
                        <View key={item.postId} style={styles.post}>
                            <View style={styles.usernameContainer}>
                                <Text style={styles.username}>@{item.username}</Text>
                            </View>

                            <Text style={styles.content}>
                                {item.text}
                            </Text>

                            <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'black', }}>
                                <View style={styles.buttons}>
                                    <Icon name='heart' size={30} color='#82667F' />
                                </View>

                                <View style={styles.buttons}>
                                    <Icon name='comment' size={30} color='#82667F' />
                                </View>
                            </View>

                        </View>
                    )
                })}

            </ScrollView>

            <NavBar title1='pen' title2='user-alt' title3='sign-out-alt'></NavBar>
        </SafeAreaView>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EACBD2',
    },
    post: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#9F9F9F',
        height: 'auto',
    },
    usernameContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        margin: 10,
        backgroundColor: '#EACBD2',
        width: '100%',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#82667F'
    },
    content: {
        fontSize: 20,
        color: '#white',
        backgroundColor: '#EACBD2',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#82667F',
        width: '97%',
    },
    buttons: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EACBD2',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#82667F',
        elevation: 5,
        width: '20%',
    },
});