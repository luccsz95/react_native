import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useState, useEffect } from 'react';


export function Login(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');
    
    const VerifLogin = () => {
        if(!email || !password) {
           setError('Veuillez remplir tous les champs');
        }
    }
    
    useEffect(() => {
        setError('');
    }, [email, password]
    );
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text=>setEmail(text)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                onChangeText={text=>setPassword(text)}
            />

            {error ? <Text style={styles.errormessages}>{error}</Text> : null}
            
            <Button 
                style={styles.button} 
                color={'#00bfff'}
                title="Se connecter" onPress={VerifLogin}
            />
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
        height: 50,
        borderWidth: 1,
        margin: 12,
        padding: 10,
        width: 300,
    },
    
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#00bfff\n',
    },

    errormessages : {
        color: '#ec0000',
        margin: 10,
    },
    
    button: {
        margin: 10,
    }
});