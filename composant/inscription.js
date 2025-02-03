import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function Inscription(){
    return(
    <View style={style.container}>
        <Text style={style.titre}>Inscription</Text>
        <TextInput 
        style={style.input}
        value={Text}
        placeholder='Email'></TextInput>
         <TextInput 
        style={style.input}
        value={Text}
        placeholder='Mot de passe'></TextInput>
         <TextInput 
        style={style.input}
        value={Text}
        placeholder='Confirme mot de passe'></TextInput>
        <Button
        title='Inscris'
        color='#00bfff'
        onPress={() => Alert.alert('Inscription')}
        />
    </View>
    )
}

const style= StyleSheet.create({
    input:{
            height: 50,
            borderWidth: 1,
            margin: 12,
            padding: 10,
            width: 300,

    },
    titre:{
height: 40,
color: '#8b0000',
fontSize: 30,
textAlign: 'center',
    }
})
export default Inscription 