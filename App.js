/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';

import Titol from './components/Titol';
import LlistatAlumnes from './components/LlistatAlumnes';
import DetallAlumne from './components/DetallAlumne';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';

import {Button} from 'react-native-paper';

const App = () => {
  const nombre = 'Alejandro Tos';
  const [info, setInfo] = useState(require('./utils/dades23-24.json'));
  return (
    <View style={estils.contenedor}>
      <View style={estils.cabezal}>
        <Titol nombre={nombre}></Titol>
      </View>
      <View style={estils.listado}>
        <ScrollView horizontal={true}>
          {info.Puntuacions.map((unAlumne, index) => {
            return <LlistatAlumnes datos={unAlumne} />;
          })}
        </ScrollView>
      </View>
      <View style={estils.detalle}></View>
        
    </View>
  );
};

const estils = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  cabezal: {
    flex: 0.2,
    backgroundColor: '#0000b9',
  },
  listado: {
    flex: 0.4,
    backgroundColor: '#5d00ed',
  },
  detalle: {
    flex: 0.6,
    backgroundColor: '#9946ff',
  },
});

export default App;
