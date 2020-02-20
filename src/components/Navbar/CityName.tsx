import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet,
   Text, 
   View, 
   TouchableOpacity,
  } from 'react-native';
import { ResultDescription } from 'components/Navbar/ResultDescription';
import { appStore } from 'store/app';

export const CityName = observer(props => {

  const { error } = appStore;

  const onPress = () => {
    appStore.setToggleView(true);
  };

  return(
    <View style={ styles.cityName }>
      <TouchableOpacity
        onPress={ onPress }
        >
        {(error.length > 0) ? 
        <Text style={ styles.text }>{ error }</Text> :
        <ResultDescription />
      }
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
    color: '#CC0E18',
    padding: 5,
  },
})