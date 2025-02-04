import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState, useEffect, useRef } from 'react';

export function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [error, setError] = useState('');

    const VerifLogin = () => {
        if (!emailRef.current || !passwordRef.current) {
            setError("Veuillez remplir tous les champs");
        } else {
            setError('');
        }
    }

    useEffect(() => {
        setError("");
    }, [emailRef.current]);

    useEffect(() => {
        setError("");
    }, [passwordRef.current]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => (emailRef.current = text, setError(''))}
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                onChangeText={text => (passwordRef.current = text, setError(''))}
                
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Button
                style={styles.button}
                title="Se connecter"
                onPress={VerifLogin}
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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#00bfff',
    },

    errorText: {
        color: '#ec0000',
        margin: 10,
    },

    button: {
        margin: 10,
        color: '#ec0000',
    }
});
