import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Reservation } from './components/Reservation.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Perficient</Text>
      <Text>Office Space Reservation UI </Text>
      <StatusBar style="auto" />
      <Reservation />
      <Button title="Log In"  color='#133a7c'/>
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
