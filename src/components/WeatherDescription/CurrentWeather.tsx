import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { appStore } from 'store/app';

export const CurrentWeather = observer(props => {

  const { successfulRequest, weather, celsiusTempMode } = appStore;

  return(
    <View>
      { successfulRequest ? <View style={ styles.mainDescription }>
        <View style={ styles.temp }>
          <Text style={ styles.currentTemp }>
            { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }
          </Text>
          <Text style={ styles.feelsLikeTemp }>
            Feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
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
              >&#8457;</Text> 
            }
          </Text>
        </TouchableOpacity>
      </View> : null }
    </View>
  )
})

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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 165,
  },
  currentTemp: {
    fontSize: 100,
    marginLeft: 20,
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