import react from "react"
import { StyleSheet, Text, View } from "react-native";

export default function Bottom() {
return(
      <View style={styles.Bottom}>
      </View>
      )
}

const styles = StyleSheet.create({
    Bottom: {
      height:30,
      marginTop:40,
      backgroundColor:"#1a1dc7",
      borderTopWidth:5,
      borderColor:"#101294",
      paddingHorizontal: 200,
    },
})