import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { appStore } from 'store/app';

export const WeatherDescription = observer(props =>{

  const { weather, urlWeatherIcon } = appStore
  console.log(urlWeatherIcon)

  return(
    <View style={ styles.weatherDescription }>
      <View>
        <Image
          style={ styles.icon }
          source={{uri:  urlWeatherIcon }}
        />
      </View>
      <Text style={ styles.textDescription }>
        { weather.weatherDescription }
      </Text>
    </View>
  )
});

const styles = StyleSheet.create({
  weatherDescription: {
    flexDirection: 'column',
    width: 180,
    height: '100%',
  },
  icon: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  textDescription: {
    marginTop: 6,
    fontSize: 20,
  }
})

