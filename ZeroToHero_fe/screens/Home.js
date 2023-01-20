import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

export default Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://zerotoheroapp.azurewebsites.net/api/Posts')
            .then(response => { return response.json() })
            .then(responseJson => {
                setPosts(responseJson);
            }
            );
    }, []);

    const commentsClick = () => {
        Alert.alert('Comments');
        // props.navigation.navigate('Post');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <ScrollView contentContainerStyle={styles.container}>
                {posts.map((item) => {
                    return (
                        <View key={item.postId} style={styles.post}>
                            <View style={styles.usernameContainer}>
                                <Text style={styles.username}>@{item.username}</Text>
                            </View>

                            <Text style={styles.content}>
                                {item.text}
                            </Text>

                            <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'transparent', width: '100%', justifyContent: 'flex-end', paddingHorizontal: 10 }}>
                                <View style={styles.buttons}>
                                    <TouchableOpacity onPress={commentsClick} >
                                        <Icon name='comment' size={35} color='#82667F' />
                                    </TouchableOpacity>
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
        width: '95%',
    },
    buttons: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EACBD2',
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#82667F',
        elevation: 5,
        width: '25%',
    },
});