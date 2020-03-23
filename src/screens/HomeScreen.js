import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a Demo!!</Text>
      <Button
        style={styles.buttonStyle}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Images Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Joe Demo"
        onPress={() => navigation.navigate('Joe')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to My Turn"
        onPress={() => navigation.navigate('MyTurn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },

  buttonStyle: {
    padding: 15,
    backgroundColor: 'green'
  },
  container: {
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
