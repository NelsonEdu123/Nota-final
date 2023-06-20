import React, {useState} from "react"
import {Button, StyleSheet, Text, TextInput, View} from "react-native"

export default function Adicionaritem({funcao}){

  const [texto,setTexto] = useState('') 

  const pegarMudanca = (val) => {setTexto(val)}

return (
  <View>

      <TextInput style={styles.input}
      placeholder="novo item"
      onChangeText={pegarMudanca}/>

      <Button onPress={() => funcao(texto)}
      title="adicionar item"
      color="#1a1dc7"/>
  </View>

  )
}

const styles = StyleSheet.create({
  input:{
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      borderBottomColor:"black"
  },
})