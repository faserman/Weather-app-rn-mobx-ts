import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { observer } from 'mobx-react';
import { Search } from 'components/Navbar/Search';
import { CityName } from 'components/Navbar/CityName';
import { appStore } from 'store/app';

export const Navbar = observer(props => {

  const { gettingWeather, toggleView } = appStore;

  return(
    <View style={ styles.container }>
      <TouchableOpacity
        style={styles.button}
        onPress={ gettingWeather }
      ></TouchableOpacity>
      { toggleView ? <Search /> : <CityName /> }
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1E1E1E',
    paddingBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#519ABA',
    padding: 10,
    marginTop: 3
  },
})

