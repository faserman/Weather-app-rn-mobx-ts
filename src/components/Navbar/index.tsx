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
        <Text style={ styles.text }>WeatherApp</Text>
      </View>
      <View style={ styles.navbar }>
        { toggleView ? <Search /> : <CityName /> }
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#1E1E1E',
  },
  title: {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#1E1E1E',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    padding: 5,
  }

})

