import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { appStore } from 'store/app';

export const CurrentWeather = observer(props => {

  const { isLoding, currentWeather } = appStore;

  return(
    <View style={ styles.mainDescription }>
      { isLoding ? <ActivityIndicator size='small' color='#EB6E4B' /> :
        <Text style={ styles.currentTemp }>{ currentWeather.temp }</Text>
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
  },
  currentTemp: {
    fontSize: 120,
  }
})