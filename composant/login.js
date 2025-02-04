import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useState, useEffect, useRef } from 'react';


export function Login(){
    // const [email, setEmail]= useState('');
    // const [password, setPassword]= useState('');
    const [error, setError]= useState('');


    const useremail = useRef('');
    const userpassword = useRef('');
    
    const VerifLogin = () => {
        if (!useremail.current || !userpassword.current)
        setError('Tout les champs doivent être remplis')
    else {
        setError('');
    }
    }
    






    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(Text)=>(useremail.current=Text, setError(''))}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                onChangeText={(Text)=>(userpassword.current=Text, setError(''))}
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
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
        color: '#8b0000',
    },

    errormessages : {
        color: '#ec0000',
        margin: 10,
    },
    
    button: {
        margin: 10,
    }
});