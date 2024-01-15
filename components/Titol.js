import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Surface} from 'react-native-paper';

const Titol = props =>{
    return(
    <View>
        <Text style={styles.sectionTitle}>
          Recuperació 1av. 23-24
        </Text>
        <Text style={styles.sectionName}>
          {props.nombre}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
      },
      sectionName: {
        fontSize: 20,
        textAlign: 'right',
        color: 'white',
      }
});
export default Titol;