import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Hello World from Undertaker!</Text>
=======
      <Text>Hello Phenom World</Text>
>>>>>>> b147df709694e16ee4e4ff876542a9dab7ccf56f
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
