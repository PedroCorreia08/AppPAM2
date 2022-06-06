import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import img from './assets/ETEC.jpeg'
import Titulo from './componentes/Conteudo/Titulo';
import Conteudo from './componentes/Conteudo';
import Card from './componentes/Conteudo/Card';
import estilos from './estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <Titulo />
      <View>
        <Card />
      </View>
      <View>
        <Conteudo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
