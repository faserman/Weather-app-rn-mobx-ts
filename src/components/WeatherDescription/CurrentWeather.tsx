import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { appStore } from 'store/app';

export const CurrentWeather = observer(props => {

  const { successfulRequest, currentWeather, } = appStore;

  return(
    <View style={ styles.mainDescription }>
      { successfulRequest ? <Text style={ styles.currentTemp }>{ currentWeather.temp }</Text> :
        null
      }
    </View>
  )
})

const styles = StyleSheet.create({
  mainDescription: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
  currentTemp: {
    fontSize: 120,
  }
})