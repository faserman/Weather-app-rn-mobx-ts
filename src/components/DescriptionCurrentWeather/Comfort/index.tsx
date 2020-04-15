import React from 'react';
import { observer } from 'mobx-react';
import { View, StyleSheet, Text } from 'react-native';
import { appStore } from 'store/app';

export const Comfort = observer(props => {

  const { weather, celsiusTempMode } = appStore;

  return(
    <View style={styles.constructor}>
      <Text style={ styles.feelsLike }>Feels like: { 
        celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike 
        }</Text>
      <Text style={ styles.pressure }>Pressure: { weather.pressureInMmhg }</Text>
      <Text style={ styles.humidity }>Humidity: { weather.humidity }</Text>
    </View>
  )
});

const styles = StyleSheet.create({
  constructor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 104,
    margin: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
  },
  feelsLike: {

  },
  humidity: {

  },
  pressure: {

  },
  text: {

  }
});