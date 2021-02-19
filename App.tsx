import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonElement from './src/singlefile/index'

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonElement disabled={false} text={'Hello World!'} />
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
