import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

const Post = props => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            
            <View>

            </View>


            <NavBar title1='chevron-circle-left' title2='home' title3='user-alt'></NavBar>
        </SafeAreaView>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Post;