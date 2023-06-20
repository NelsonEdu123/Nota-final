import react from "react"
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
return(
      <View style={styles.header}>
        <Text style={styles.final}>FINAL</Text>
      </View>
      )
}

const styles = StyleSheet.create({
    header: {
      height:70,
      paddingTop:10,
      marginBottom:40,
      backgroundColor:"#1a1dc7",
      borderBottomWidth:5,
      borderColor:"#101294",
      alignItems:"center",
    },
    
    final: {
      color:"white",
      fontSize:40,
      fontWeight:"bold",
    }

})