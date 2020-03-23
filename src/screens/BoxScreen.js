import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    height: 70,
    width: 70,
    backgroundColor: 'pink'
  },
  textTwoStyle: {
    height: 70,
    width: 70,
    fontSize: 18,
    backgroundColor: 'green'
    // position: 'absolute',
    // top: 70,
    // left: 120
  },
  textThreeStyle: {
    height: 70,
    width: 70,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
