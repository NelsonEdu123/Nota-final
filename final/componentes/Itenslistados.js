import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"

export default function Itenslistados({props, funcao}) {
    return(
      <TouchableOpacity onPress={()=>funcao(props.key)}>
        <View style={styles.postagem}>
         <MaterialIcons name="delete" size={18} color={"black"}/>
         <Text style={styles.itemtexto}>{props.texto}</Text>
        </View>
      </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
  postagem:{
    padding:16,
    marginTop:16,
    borderStyle:"dashed",
    borderWidth:1,
    borderColor:"#101294",
    flexDirection:"row",
  },
  itemtexto: {
    marginLeft: 30,
  },
})