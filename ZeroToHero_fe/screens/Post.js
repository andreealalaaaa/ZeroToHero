import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

const Post = props => {
    const [comments, setComments] = useState([]);
    const [comm, setComm] = useState('');
    // const [isHearted, setIsHearted] = useState(false);
    // const heartIcon = isHearted ? 'heartbeat' : 'heart-broken';

    const comment = {
        PostId: props.postId,
        Username: props.currentUser,
        CommentText: comm
    }

    // const hearted = {
    //     PostId: props.postId,
    //     Username: props.currentUser
    // }

    // const toggleHeart = () => {
    //     setIsHearted(!isHearted);
    //     fetch('https://zerotoheroapp.azurewebsites.net/api/Hearteds', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(hearted)
    //     })
    // }

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        fetch('https://zerotoheroapp.azurewebsites.net/api/Comments/Posts/' + props.postId)
            .then(response => { return response.json() })
            .then(responseJson => {
                setComments(responseJson);
            });
    }

    const AddComment = () => {
        fetch('https://zerotoheroapp.azurewebsites.net/api/Comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(() => {
                // call the fetchComments function again to refresh the comments
                fetchComments();
                // clear the text input
                setComm('');
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <View style={styles.container}>
                <View>
                    <View key={props.postId} style={styles.post}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>@{props.username}</Text>
                        </View>

                        <Text style={styles.content}>
                            {props.text}
                        </Text>

                        {/* <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'transparent', width: '100%', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                            <View style={styles.buttons}>
                                <TouchableOpacity onPress={toggleHeart} >
                                    <Icon name={heartIcon} size={30} color='#82667F' />
                                </TouchableOpacity>
                            </View>
                        </View> */}

                    </View>

                    <View styles={styles.addCommentContainer}>
                        <TextInput
                            style={styles.addComment}
                            placeholder="Add a comment"
                            onChangeText={(text) => setComm(text)}
                            value={comm}
                            multiline={true}
                        />
                        <TouchableOpacity onPress={AddComment} >
                            <Icon name='check' size={30} color='#82667F' />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ backgroundColor: 'white', height: '50%' }}>
                    {
                        comments.map(comment => {
                            return (
                                <View key={comment.commentId} style={styles.comment}>
                                    <Text style={styles.username}>
                                        @{comment.username}
                                    </Text>

                                    <Text style={styles.commentText}>
                                        {comment.commentText}
                                    </Text>

                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>


            <NavBar title1='chevron-circle-left' title2='home' title3='user-alt'></NavBar>
        </SafeAreaView >
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EACBD2',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
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
        paddingBottom: 20,
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
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#82667F',
        elevation: 5,
        width: '20%',
    },
    comment: {
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#EACBD2',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#9F9F9F',
        height: 'auto',
        width: '95%',
        borderRadius: 10,
        elevation: 5,
        padding: 10,
    },
    commentText: {
        fontSize: 20,
        color: '#82667F',
        backgroundColor: 'transparent',
        width: '95%',
        fontWeight: '400',
    },
    addCommentContainer: {
        backgroundColor: '#EACBD2',
        padding: 20,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    addComment: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#82667F',
        backgroundColor: 'white',
        padding: 10,
        width: '95%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#82667F',
    }
});

export default Post;