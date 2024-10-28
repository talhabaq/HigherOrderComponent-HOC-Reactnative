import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import HOC from './HOC';

const OnMouseOver = ({ value, increment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click {value}</Text>
      <TouchableOpacity onPressIn={increment} ><Text>Mouse Count</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HOC(OnMouseOver);
