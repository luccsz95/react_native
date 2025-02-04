import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState, useEffect, useRef } from 'react';

function Inscription() {
    // const [email, setemail] = useState('');
    const [erreur, seterreur] = useState('');
    // const [motdepasse, setmotdepasse] = useState('');
    // const [confirmmotdepasse, setconfirmmotdepasse] = useState('');

    const useremail = useRef('');
    const usermdp = useRef('');
    const userconfirm = useRef('');
    



    const Verifinscription = () => {
        if (!useremail.current || !usermdp.current || !userconfirm.current)
            seterreur('Tout les champs doivent être remplis')
        else {
            seterreur('');
        }

    }

    useEffect(() => {
        seterreur('');
        if (useremail) useremail.current = null;
    }, [useremail]);



    useEffect(() => {
        seterreur('');
        if (usermdp) usermdp.current = null;
    }, [usermdp]);




    useEffect(() => {
        seterreur('');
        if (userconfirm) userconfirm.current = null;
    }, [userconfirm]);

    return (
        <View style={style.container}>
            <Text style={style.titre}>Inscription</Text>
            <TextInput
                style={style.input}
                onChangeText={(Text)=>(useremail.current=Text, seterreur(''))}
                value={Text}
                placeholder='Email'></TextInput>
            <TextInput
                style={style.input}
                onChangeText={(Text)=>(usermdp.current=Text, seterreur(''))}
                value={Text}
                placeholder='Mot de passe'></TextInput>
            <TextInput
                style={style.input}
                onChangeText={(Text)=>(userconfirm.current=Text, seterreur(''))}
                value={Text}
                placeholder='Confirme mot de passe'></TextInput>
            {erreur ? <Text style={style.erreur}>{erreur}</Text> : null}
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