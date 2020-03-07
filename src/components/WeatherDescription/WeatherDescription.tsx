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

  return(
    <View style={ styles.weatherDescription }>
      <View>
        <Image
          style={ styles.icon }
          source={{uri:  urlWeatherIcon }}
        />
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  weatherDescription: {

  },
  icon: {

  }
})

