import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import { appStore } from 'store/app';

export const CurrentWeather = observer(props => {

  const { 
    successfulRequest,
    weather, 
    celsiusTempMode,
  } = appStore;


  return(
    <View>
      { successfulRequest ?
      <View style={ styles.currentWeather }>
        <View style={ styles.mainDescription }>
          <Text style={ styles.currentTemp }>
            { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }&#176;
          </Text>
          <Image
            style={ styles.icon }
            source={{uri:  weather.weatherIconUrl }}
          />
        </View>
        <View style={ styles.description }>
          <Text style={ styles.feelsLikeTemp }>feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
              { celsiusTempMode ? <Text>&#8451;</Text> : <Text>&#8457;</Text> }
          </Text>
          <Text style={ styles.textDescription }>
            { weather.weatherDescription }
          </Text>
        </View>
      </View>
      : null }
    </View>
  )
});

const styles = StyleSheet.create({
  currentWeather: {
    width: '100%',
    height: 140,
    marginTop: 3,
    alignItems: 'center',
    backgroundColor: '#E8E9EB',
  },
  mainDescription: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '98%',
    height: 100,
    borderRadius: 3,
    backgroundColor: '#F6F8FA',
  },
  description: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '98%',
    height: 37,
    borderRadius: 3,
    backgroundColor: '#F6F8FA',
  },
  icon: {
    marginTop: '2%',
    width: 100,
    height: 100,
  },
  textDescription: {
    fontSize: 20,
    marginLeft: '5%',
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
