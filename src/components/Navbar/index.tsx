import React from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  TouchableOpacity
 } from 'react-native';
import { observer } from 'mobx-react';
import { appStore } from 'store/app';
import { Search } from './Search';
import { ResultDescription } from './ResultDescription';

export const Navbar = observer(props => {

  const { toggleView, celsiusTempMode } = appStore;

  return(
    <View>
      <View style={ styles.title }>
        <Text style={ styles.textApp }>
          <Text style={ styles.textWeather }>Weather</Text>App
        </Text>
        <TouchableOpacity
          style={ styles.button }
          onPress={ appStore.setCelsiusTempMode }
        >
          <Text>
            { celsiusTempMode ? <Text 
                style={ styles.textButton }
                >&#8451;</Text> : 
              <Text 
                style={ styles.textButton }
                >&#8457;</Text> }
          </Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.navbar }>
        { toggleView ? <Search /> : <ResultDescription /> }
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  title: {
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#4E4D4A',
  },
  navbar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#F2F3F2',
  },
  textWeather: {
    fontSize: 25,
    color: '#EB6E4B',
  },
  textApp: {
    margin: 5,
    alignSelf: 'flex-end',
    fontSize: 23,
    color: '#F2F3F2',
  },
  button: {
    alignSelf: 'flex-end',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB6E4B',
    height: 30,
    width: 30,
    borderRadius: 2,
  },
  textButton: {
    fontSize: 25,
    color: '#fff',
  },
})

