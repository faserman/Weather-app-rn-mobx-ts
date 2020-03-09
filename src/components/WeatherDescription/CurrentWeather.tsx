import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { appStore } from 'store/app';
import { WeatherDescription } from './WeatherDescription';

export const CurrentWeather = observer(props => {

  const {
    successfulRequest, 
    weather, 
    celsiusTempMode
  } = appStore;

  return(
    <View>
      { successfulRequest ? <View style={ styles.CurrentWeather }>
        <View style={ styles.temp }>
          <View style={ styles.currentTemp }>
            <Text style={ styles.currentTempValue }>
              { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }&#176;
            </Text>
          </View>
            <Text style={ styles.feelsLikeTemp }>feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
                { celsiusTempMode ? <Text>&#8451;</Text> : <Text>&#8457;</Text> }
            </Text>
        </View>
        <WeatherDescription />
      </View> : null }
    </View>
  )
});

const styles = StyleSheet.create({
  CurrentWeather: {
    flexDirection: 'row',
    height: 160,
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
  temp: {
    height: '100%',
    width: 165,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  currentTemp: {
    alignItems: 'center',
  },
  currentTempValue: {
    fontSize: 80,
  },
  feelsLikeTemp: {
    fontSize: 20,
    alignSelf: 'center',
  },
})