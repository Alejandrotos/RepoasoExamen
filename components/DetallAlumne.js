import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Surface, Chip} from 'react-native-paper';

const DetallAlumne = props => {
    return(
    <View>
        <ScrollView>
          <Text>{props.datos['Alumne Avaluat']}</Text>
          <Text>{props.datos['Aspectes Formals (20%)']}</Text>
          <Text>{props.datos['Dificultat ']}</Text>
          <Text>{props.datos['Grau de Resolució de la Proposta']}</Text>
          <Text>{props.datos['Originalitat']}</Text>
          <Text>{props.datos['Actualitat']}</Text>
          <Text>{props.datos['Resultats Obtinguts']}</Text>
          <Text>{props.datos['Altres consideracions']}</Text>
          <Text>{props.datos["Qualitat de l'expressió oral"]}</Text>
          <Text>{props.datos['Qualitat de les respostes a les preguntes']}</Text>
          </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    estilCard: {
      width: Dimensions.get('window').width / 3,
      height: 150,
      margin: 5,
      padding: 3,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 9,
    },
  });
  export default DetallAlumne;