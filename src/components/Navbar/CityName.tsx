import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet,
   Text, 
   View, 
   TouchableOpacity 
  } from 'react-native';
import { appStore } from 'store/app';

export const CityName = observer(props => {

  /*const onPress = () => {
    appStore.setToggleView(true);
  }*/

  return(
    <View>
      <TouchableOpacity 
        style={ styles.cityName }
        //onPress={ onPress }
        >
          <Text style={ styles.text }></Text>
        </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  cityName: {

  },
  text: {

  },
})