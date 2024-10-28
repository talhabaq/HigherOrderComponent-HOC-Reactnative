import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HOC from './HOC';

const OnClick = ({ value, increment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click {value}</Text>
      <Button title="Update Count" onPress={increment} />
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

export default HOC(OnClick);
