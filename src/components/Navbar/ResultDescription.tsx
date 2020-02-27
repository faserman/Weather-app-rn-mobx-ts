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

  const { isLoding, navbar } = appStore;

  const onPress = () => {
    appStore.setToggleView(true);
  };

  return(
    <View style={ styles.cityName }>
      <TouchableOpacity
        onPress={ onPress }
        >
        <View>
          { isLoding ? <ActivityIndicator size='small' color='#49B8EC' /> :
            <Text style={styles.text}>{ navbar }</Text> }
        </View>
      </TouchableOpacity>
    </View>
  )
})

  
const styles = StyleSheet.create({
  cityName: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
})