import { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

export default function Home(){
    const[name, setName] = useState('') //String
    const[email, setEmail] = useState('')
    const[secondname, setSecondName] = useState('')

    function handleUserAdd() {
      console.log(
        "Nome completo:" + name
        +  "\nSecondName" + secondname +
         "\nE-mail " + email 
        
      )
      Alert.alert(
        "Nome completo: " + name +  "SecondName: " + secondname + "\E-mail: " + email 
      )
    }

//useState

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Preencha os Dados </Text>
            <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value= { name }
            onChangeText= { setName}
            />

            <TextInput
            style={styles.input}
            placeholder="Segundo nome"

            value= { secondname }
            onChangeText= { setSecondName}
            />

            <TextInput
            style={styles.input}
            placeholder="E-mail"

            value= { email }
            onChangeText= { setEmail}
            />

           

            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd}>
                <Text style={styles.btnTxt}>cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}