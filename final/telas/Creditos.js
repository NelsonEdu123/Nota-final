import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../componentes/Header"
import Bottom from "../componentes/Bottom"

export default function Creditos({navigation}) {
  return (
    <View style={styles.container}>
    <Header/>

      <View style={styles.textto}>
        <Text style={styles.texto}>Nelson Eduardo Lemos de Melo Filho</Text>
        <Text style={styles.texto}>Turma: 1MC</Text>
        <Text style={styles.texto}>Matricula: 01543385</Text>
      </View>

      <View style={styles.bottom}>
        <Bottom/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   textto: {
    alignContent:"center",
    alignItems:"center",
    flex:1,
   },
   bottom:{
      alignSelf: "flex-end",
      alignItems:"center",
   },
});
