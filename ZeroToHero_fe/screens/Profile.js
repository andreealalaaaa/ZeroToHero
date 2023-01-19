import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Dimensions, Alert, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

const Profile = props => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/ProfileScreen2.png')}
                    style={{ flex: 1, width: '100%', resizeMode: 'stretch', backgroundColor: 'transparent' }}
                >
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', width: '100%', height: '20%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 45 }}>
                            <Text style={{fontSize: 50, fontWeight: '600'}}>{props.name}</Text>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>@{props.username}</Text>
                        </View>


                    </View>

                </ImageBackground>
            </View>

            <NavBar title1='home' title2='pen' title3='sign-out-alt'></NavBar>
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

export default Profile;