import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Search } from 'components/Navbar/Search';
import { CityName } from 'components/Navbar/CityName';
import { appStore } from 'store/app';

export const Navbar = observer(props => {

  const { toggleView } = appStore;

  return(
    <View>
      <View style={ styles.title }>
        <Text style={ styles.textApp }>
          <Text style={ styles.textWeather }>Weather</Text>App
        </Text>
      </View>
      <View style={ styles.navbar }>
        {toggleView ? <Search /> : <CityName /> }
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  title: {
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#4E4D4A',
  },
  navbar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  textWeather: {
    fontSize: 25,
    color: '#EB6E4B',
    padding: 5,
  },
  textApp: {
    fontSize: 23,
    color: '#F2F3F2',
    padding: 5,
  },
})

