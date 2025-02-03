import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

function Inscription() {
    const [email, setemail] = useState('');
    const [erreur, seterreur] = useState('');
    const [motdepasse, setmotdepasse] = useState('');
    const [confirmmotdepasse, setconfirmmotdepasse] = useState('');



    const Verifinscription = () => {
        if (!email || !motdepasse || !confirmmotdepasse)
            seterreur('Tous les champs sont requis')
        else {
            seterreur('');
        }

    }

useEffect(() => {
    seterreur ('');
}, [email, motdepasse, confirmmotdepasse]);

    return (
        <View style={style.container}>
            <Text style={style.titre}>Inscription</Text>
            <TextInput
                style={style.input}
                onChangeText={setemail}
                value={Text}
                placeholder='Email'></TextInput>
            <TextInput
                style={style.input}
                onChangeText={setmotdepasse}
                value={Text}
                placeholder='Mot de passe'></TextInput>
            <TextInput
                style={style.input}
                onChangeText={setconfirmmotdepasse}
                value={Text}
                placeholder='Confirme mot de passe'></TextInput>
            {erreur && <Text style={style.erreur}>{erreur}</Text>}
            <Button
                title='Inscris'
                color='#00bfff'
                onPress={Verifinscription}
            />
        </View>
    )
}


const style = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        margin: 12,
        padding: 10,
        width: 300,

    },
    titre: {
        height: 40,
        color: '#8b0000',
        fontSize: 30,
        textAlign: 'center',
    },
    erreur:{
        color:'#ff0000',
    }
})
export default Inscription 