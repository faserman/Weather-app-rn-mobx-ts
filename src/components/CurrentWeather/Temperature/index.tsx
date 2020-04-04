import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { appStore } from 'store/app';

export const Temperature = observer(props => {

  const {
    weather, 
    celsiusTempMode
  } = appStore;

  return(
    <View style={ styles.temperature }>
      <Text style={ styles.currentTempValue }>
        { celsiusTempMode ? weather.celsiusTemp : weather.fahrenheitTemp }&#176;
      </Text>
      <Text style={ styles.feelsLikeTemp }>feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
          { celsiusTempMode ? <Text>&#8451;</Text> : <Text>&#8457;</Text> }
      </Text>
    </View>
  )
});

const styles = StyleSheet.create({
  temperature: {
    height: '100%',
    width: 165,
    alignSelf: 'center',
    flexDirection: 'column',
  },

  currentTempValue: {
    alignSelf: 'flex-end',
    fontSize: 80,
  },
  feelsLikeTemp: {
    fontSize: 20,
    alignSelf: 'center',
  },
})