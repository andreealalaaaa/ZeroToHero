import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavBar = props => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.button} onPress={() => { /* do something */ }}>
                <Icon name={props.title1} size={40} color="#EACBD2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* do something */ }}>
                <Icon name={props.title2} size={40} color="#EACBD2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* do something */ }}>
                <Icon name={props.title3} size={40} color="#EACBD2" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#82667F',
        flexDirection: 'row',
    },
    button:{
        width: 80,
        height: 60,
        backgroundColor: '#B486AB',
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#72596F',
    }
});

export default NavBar;