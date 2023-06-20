import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from "../componentes/Header"
import Bottom from "../componentes/Bottom"

export default function Home({navigation}) {
  return (
    <View style={styles.container}>

        <Header/>
      <View style={styles.texto}>
        <Text style={styles.texxto}>Esse Prototipo foi feito para a avaliação final de mobile code.</Text>
        <Text>‎ ‎ ‎ </Text>
        <Text>‎ ‎ ‎ </Text>
        <Text>‎ ‎ ‎ </Text>
        <Text>‎ ‎ ‎ </Text>
        <Text style={styles.comput}>▐▓█▀▀▀▀▀▀▀▀▀█▓▌░▄▄▄▄▄░
▐▓█░░▀░░▀▄░░█▓▌░█▄▄▄█░
▐▓█░░▄░░▄▀░░█▓▌░█▄▄▄█░
▐▓█▄▄▄▄▄▄▄▄▄█▓▌░█████░
░░░░▄▄███▄▄░░░░░█████░</Text>
      </View>

    <View style={styles.boato}>
    
      <Text>‎ ‎ ‎ </Text>
      <Text>‎ ‎ ‎ </Text>
      <Button  title="Creditos"
      onPress={() => navigation.navigate("Creditos")} />

      <Text>‎ ‎ ‎ </Text>

      <Button title="To Do List"
       onPress={() => navigation.navigate("Todo")}/>
       
      <StatusBar style="auto" />
    </View>
    <Bottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  texto: {
    flex:1,
    borderColor:"black",
    borderWidth:3,
    padding:4,
    borderRadius:10,
    marginHorizontal:10,
  },
    texxto: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  boato:{
    flex :1,
    marginHorizontal:20,
  },
  comput:{
  alignSelf:"center"
  },
});