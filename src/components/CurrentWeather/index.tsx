import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, } from 'react-native';
import { appStore } from 'store/app';
import { Temperature } from './Temperature'
import { WeatherDescription } from './WeatherDescription';

export const CurrentWeather = observer(props => {

  const { successfulRequest } = appStore;

  return(
    <View>
      { successfulRequest ?
      <View style={ styles.currentWeather }>
        <Temperature />
        <WeatherDescription />
      </View>
      : null }
    </View>
  )
});

const styles = StyleSheet.create({
  currentWeather: {
    flexDirection: 'row',
    height: 160,
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
})
