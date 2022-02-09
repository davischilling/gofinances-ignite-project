import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dashboard } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // centralize horizontally
    justifyContent: 'center', // centralize vertically
  },
});
