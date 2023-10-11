/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

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
  return (
    <View>
      <StatusBar/>
      
      <Text style={estils.sectionTitle}> Welcome to React Native</Text>
      <Button icon='camera-plus'>Polsa aci</Button>
      <Button icon='barcode'>Tomas aci</Button>
    </View>
  );
}

const estils = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  }
});

export default App;
