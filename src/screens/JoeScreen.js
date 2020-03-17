import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import ColorScreen from './ColorScreen';

const ColorCounter = () => {
  return (
    <View>
      <Text style={styles.joeStyle}>Hello Joe!!!</Text>
      <Text style={styles.textStyle}>I'm another line!!</Text>
      <Button
        title="To be Announced..."
        onPress={() => Alert.alert('Hello Joe!!')}
      />

      <ColorScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  joeStyle: {
    color: 'green',
    fontSize: 30,
    textAlign: 'center'
  },
  textStyle: {
    color: 'purple'
  }
});

export default ColorCounter;
