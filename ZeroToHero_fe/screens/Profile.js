import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Switch, Alert, TouchableOpacity, Image, Console } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleSwitch from 'rn-toggle-switch'


import Header2 from '../components/Header2';
import NavBar from '../components/NavBar';

const Profile = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const switchText= isEnabled ? 'Posts' : 'Wish List';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#82667F' }}>
            <Header2 title="ZeroToHero" />

            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/ProfileScreen2.png')}
                    style={{ flex: 1, width: '100%', resizeMode: 'stretch', backgroundColor: 'transparent' }}
                >
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignContent: 'center' }}>
                        <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', width: '100%', height: '30%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: 45 }}>
                                <Text style={{ fontSize: 40, fontWeight: '600' }}>{props.name}</Text>
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>@{props.username}</Text>
                            </View>

                            <View style={styles.containerSwitch}>
                                <Text style={{color: '#82667F', fontSize: 20, fontWeight: '500'}}>{switchText}</Text>
                                <Switch
                                    value={isEnabled}
                                    style={{ width: 50, height: 30, alignSelf: 'center'}}
                                    onValueChange={setIsEnabled}
                                    trackColor={{ false: '#DFDFDF', true: '#DFDFDF' }}
                                    thumbColor={isEnabled ? '#82667F' : '#82667F'}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'center', marginBottom: 20, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
                            <Text>AAAAAAAAAAAA</Text>
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
    containerSwitch: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: 5,
        width: '50%',
        borderRadius: 10,
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginRight: 20,
    },
    switch: {
        alignSelf: 'center',
    },
});

export default Profile;