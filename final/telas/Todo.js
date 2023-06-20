import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "../componentes/Header"
import Bottom from "../componentes/Bottom"
import Itenslistados from "../componentes/Itenslistados"
import Adicionaritem from "../componentes/Adicionaritem"

export default function Todo({navigation}) {

  const [Lista, setLista]= useState([
    {texto: "item 3", key:"1"},
    {texto: "item 2", key:"2"},
    {texto: "item 1", key:"3"},
  ])

  const apertarItem = (key) =>{
    setLista(
      (prevLista) => {return prevLista.filter(texto => texto.key !=key);}
    )
  }

  const submeterInformacao = (texto) => {
    setLista((prevLista)=> {
      return [
        {texto:texto, key:Math.random().toString()}, ...prevLista
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.conteudo}>

          <Adicionaritem funcao={submeterInformacao}/>
        
        <View style={styles.estilolista}>
         <FlatList
          data={Lista}
          renderItem={({item})=>(<Itenslistados props = {item} funcao={apertarItem}/>)}/>
         </View> 
      </View>

       <View style={styles.bottom}>
        <Bottom/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo:{
    padding:40,
    flex:1,
  },
  bottom:{
      alignSelf: "flex-end",
      alignItems:"center",
   },
});
