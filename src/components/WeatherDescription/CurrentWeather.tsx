import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { appStore } from 'store/app';
import { WeatherDescription } from './WeatherDescription';

export const CurrentWeather = observer(props => {

  const { successfulRequest, weather, celsiusTempMode } = appStore;

  return(
    <View>
      { successfulRequest ? <View style={ styles.mainDescription }>
        <View style={ styles.temp }>
          <View style={ styles.currentTemp }>
            <Text style={ styles.currentTempValue }>
              { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }
            </Text>
          </View>
            <Text style={ styles.feelsLikeTemp }>feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
                { celsiusTempMode ? <Text>&#8451;</Text> : <Text>&#8457;</Text> }
            </Text>
        </View>
        <TouchableOpacity
          style={ styles.button }
          onPress={ appStore.setCelsiusTempMode }
        >
          <Text>
            { celsiusTempMode ? <Text 
                style={ styles.text }
                >&#8451;</Text> : 
              <Text 
                style={ styles.text }
                >&#8457;</Text> }
          </Text>
        </TouchableOpacity>
      </View> : null }
      <WeatherDescription />
    </View>
  )
});

const styles = StyleSheet.create({
  mainDescription: {
    flexDirection: 'row',
    height: 200,
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
  temp: {
    flexDirection: 'column',
    width: 165,
  },
  currentTemp: {
    width: 165,
    alignItems: 'flex-end',
  },
  currentTempValue: {
    fontSize: 100,
  },
  feelsLikeTemp: {
    fontSize: 20,
    marginLeft: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#EB6E4B',
    height: 30,
    width: 30,
    borderRadius: 2,
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
})