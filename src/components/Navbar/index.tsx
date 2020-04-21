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

export const Navbar = observer(props => {

  const { celsiusTempMode } = appStore;

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
      <Search />
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
  textWeather: {
    fontSize: 25,
    color: '#B5DDF5',
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
    backgroundColor: '#B5DDF5',
    height: 30,
    width: 30,
    borderRadius: 2,
  },
  textButton: {
    fontSize: 25,
    color: '#fff',
  },
})

