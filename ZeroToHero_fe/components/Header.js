import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Header = props => {
    
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        paddingTop: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#82667F',
        fontSize: 55,
        fontWeight: 'bold',
    },
});

export default Header;