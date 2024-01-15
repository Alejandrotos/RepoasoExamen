import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Surface} from 'react-native-paper';

const ResumAlumne = props => {
  <View>
    <Text>{props.nom}</Text>
    <View style={styles.estilBorde}>
      <Text>Nota</Text>
      <Text>{props.nota}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  estilBorde: {
    margin: 5,
    padding: 3,
    borderWidth: 4,
  },
});

export default ResumAlumne;
