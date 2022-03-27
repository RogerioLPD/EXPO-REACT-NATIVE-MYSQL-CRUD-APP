import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/our.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: -60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    marginTop: -60,
  }
});
