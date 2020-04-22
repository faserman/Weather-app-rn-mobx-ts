import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { appStore } from 'store/app';

export const CurrentWeather = observer(props => {

  const {
    weather, 
    celsiusTempMode,
    result
  } = appStore;

  return(
    <View>
      <View style={ styles.currentWeather }>
        <Text style={ styles.cityNameText }>{ result }</Text>
        <Text style={ styles.dtText }>{ weather.dateTime }</Text>
          <Text style={ styles.currentTemp }>
            { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }&#176;
          </Text>
          <Text style={ styles.textDescription }>
            { weather.weatherDescription }
          </Text>
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  currentWeather: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 140,
    marginTop: 3,
    marginBottom: 10,
    alignItems: 'center',
  },
  dtText: {
    fontSize: 20,
    marginTop: -8,
    color: '#1E1E1E',
  },
  cityNameText: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
  /*icon: {
    marginTop: '2%',
    width: 100,
    height: 100,
  },*/
  textDescription: {
    fontSize: 20,
    marginTop: -20
  },
  currentTemp: {
    fontSize: 100,
    marginTop: -20,
    marginLeft: '7%',
  },
  feelsLikeTemp: {
    fontSize: 20,
  },
})
