import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => {}} />
      <Button title="Decrease" onPress={() => {}} />
      <Text>Current Count: {}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
