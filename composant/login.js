import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

export function Login(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
            />
            
            <Button style={styles.button} title="Se connecter" onPress={() => {}}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 10,
    },
    
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#00bfff\n',
    },
    
    button: {
        margin: 10,
        color: '#8b0000',
    }
});