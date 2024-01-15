import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Surface} from 'react-native-paper';

import ResumAlumne from './ResumAumne';

const LlistatAlumnes = props => {
    const nomAlumne = props.datos['Alumne Avaluat'];
    const aspectesFormals = props.datos['Aspectes Formals (20%)'];
    const dificultat = props.datos['Dificultat '];
    const Resolució = props.datos['Grau de Resolució de la Proposta'];
    const Originalitat = props.datos['Originalitat'];
    const Actualitat = props.datos['Actualitat'];
    const ResultatsObtinguts = props.datos['Resultats Obtinguts'];
    const ExpresioOral = props.datos["Qualitat de l'expressió oral"];
    const RespostesPreguntes = props.datos['Qualitat de les respostes a les preguntes']
    const resultado = () => {
       let resultAspectes = aspectesFormals * 0.2 
       let result50 = ((dificultat+Resolució+Originalitat+Actualitat+ResultatsObtinguts)/5)*0.5
       let result30 = ((ExpresioOral+RespostesPreguntes)/2)*0.3;
       let result = resultAspectes+result50+result30;
        return result;
    }
  return (
      <Surface style={styles.estilCard}>
        <View>
          <ResumAlumne nom={nomAlumne} nota={resultado()}></ResumAlumne>
        </View>
      </Surface>
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
export default LlistatAlumnes;
