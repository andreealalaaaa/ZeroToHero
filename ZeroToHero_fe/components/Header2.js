import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header1 = props => {
    
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82667F',
    },
    headerTitle: {
        color: '#EACBD2',
        fontSize: 60,
        fontWeight: 'bold',
    },
});

export default Header1;