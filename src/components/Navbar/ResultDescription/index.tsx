import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity,
  ActivityIndicator,
  } from 'react-native';
import { appStore } from 'store/app';

export const ResultDescription = observer(props => {

  const { 
    isLoding, 
    navbar,
    weather,
    successfulRequest
  } = appStore;
 
  const onPress = () => {
    appStore.setToggleView(true);
  };

  return(
    <View style={ styles.container }>
      <TouchableOpacity
        onPress={ onPress }
        >
        { isLoding ? <ActivityIndicator size='small' color='#B5DDF5' /> :
          <View style={ styles.resultDescription }>
            <Text style={ styles.cityText }>{ navbar }</Text>
            { successfulRequest ? 
              <Text style={ styles.dtText }>
                { weather.dateTime }
              </Text> : null
            }
          </View>
        }
      </TouchableOpacity>
    </View>
  )
})
  
const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: 3,
    alignContent: 'center',
    width: '100%',
  },
  resultDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '98%',
    height: '100%',
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  cityText: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
  dtText: {
    fontSize: 20,
    marginTop: -8,
    color: '#1E1E1E',
  }
})