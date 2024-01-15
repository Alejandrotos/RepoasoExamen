/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Titol from './components/Titol';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';

import { Button } from 'react-native-paper';

const App = () => {  
  const nombre = "Alejandro Tos";
  return (
    <View style={estils.contenedor}>
      <View style={estils.cabezal}>
      <Titol nombre={nombre}></Titol>
      </View>
      <View style={estils.listado}>

      </View>
      <View style={estils.detalle}>

      </View>
    </View>
  );
}

const estils = StyleSheet.create({
  contenedor: {
    flex:1,
  },
   cabezal:{
    flex:0.2,
    backgroundColor: '#0000b9'
   },
   listado:{
    flex:0.4,
    backgroundColor: '#5d00ed'
   },
   detalle:{
    flex:0.6,
    backgroundColor: '#9946ff'
   }
});

export default App;
