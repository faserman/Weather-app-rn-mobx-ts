import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  Text, 
  View,
  ActivityIndicator,
  } from 'react-native';
import { appStore } from 'store/app';
import { CurrentWeather } from 'components/CurrentWeather/index';
import { DailyForecastList } from 'components/DailyForecastList/index';
import { DescriptionCurrentWeather } from 'components/DescriptionCurrentWeather/index';
import { Footer } from 'components/Footer';

export const ResultDescription = observer(props => {

  const { 
    isLoading,
    result,
    successfulRequest
  } = appStore;

  return(
    <View style={ styles.container }>
      { isLoading ? <ActivityIndicator size='small' color='#B5DDF5' /> :
        <View style={ styles.resultDescription }>
          { successfulRequest ?
            <View>
              <CurrentWeather />
              <DescriptionCurrentWeather />
              <DailyForecastList />
              <Footer />
            </View>
              : <View style={ styles.err }>
                  <Text style={ styles.text }> { result } </Text>
                </View>
          }
        </View>
      }
    </View>
  )
})
  
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 20,
    alignContent: 'center',
    width: '100%',
  },
  resultDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '98%',
  },
  text: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
  err: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    /*backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,*/
  },
}) 