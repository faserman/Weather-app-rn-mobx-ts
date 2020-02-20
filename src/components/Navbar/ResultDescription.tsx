import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet,
   Text,
   View,
   ActivityIndicator,
  } from 'react-native';
import { appStore } from 'store/app';

export const ResultDescription = observer(props => {

  const { result } = appStore;

  return(
    <View>
      {(result === undefined) ? <ActivityIndicator size='small' color='#49B8EC' /> :
        <Text style={styles.text} >{ result.cityName }, { result.country }</Text>}
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