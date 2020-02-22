import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet,
   Text,
   View,
   ActivityIndicator,
  } from 'react-native';
import { appStore } from 'store/app';

export const CityName = observer(props => {

  const { weather, navbar } = appStore;

  return(
    <View>
      {(weather === undefined) ? <ActivityIndicator size='small' color='#49B8EC' /> :
        <Text style={styles.text}>{ navbar }</Text>}
    </View>
  )
})

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
})