import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Footer = () => {
  return(
    <View style={ styles.container }>
      <Text style={ styles.text }>Faserman unLtd., 2020. All rights are missing.</Text>
      <Text style={ styles.text }>SOURCES:</Text>
      <Text style={ styles.text }>openweathermap.org, icons8.com, unsplash.com</Text>
      <Text style={ styles.textP }>Version: 0.6.7</Text>
      <Text style={ styles.textP }>The application was created with God's help, and not otherwise))</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#B5DDF5',
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginTop: 25,
    height: 110
  },
  text: {
    color: '#A7B3CB',
  },
  textP: {
    color: '#A7B3CB',
    fontSize: 12
  },
})