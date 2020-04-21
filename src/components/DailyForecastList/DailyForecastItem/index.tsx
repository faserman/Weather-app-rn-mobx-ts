import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { appStore } from 'store/app';

export const DailyForecastItem = observer(props => {

  const { celsiusTempMode } = appStore;
  const {
    forecastDate,
    forecastTime,
    celsiusTemp,
    fahrenheitTemp,
    weatherDescription,
    weatherIconUrl,
  } = props.forecast;

  return (
    <View style={ styles.container }>
      <View style={ styles.forecastBox }>
        <Text style={ styles.date }>
          { forecastDate }
        </Text>
        <Text style={ styles.date }>
          { forecastTime }
        </Text>
        <Image
          style={ styles.icon }
          source={{uri: weatherIconUrl}}
        ></Image>
        <Text style={ styles.temp }>
          { celsiusTempMode ? celsiusTemp : fahrenheitTemp }&#176;
        </Text>
        <Text style={ styles.description }>
          { weatherDescription }
        </Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    margin: 1,
    alignItems: 'center',
    width: 110,
  },
  forecastBox: {
    alignItems: 'center',
    width: 109,
    height: 143,
    borderLeftColor: '#B5DDF5',
    borderRightColor: '#B5DDF5',
    borderStyle: 'solid',
    borderRadius: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  icon: {
    marginTop: 3,
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  temp: {

  },
  description: {

  },
  date: {

  },
})