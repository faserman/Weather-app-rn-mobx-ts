import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { appStore } from 'store/app';
import { Wind } from 'components/DescriptionCurrentWeather/Wind/index';

export const DescriptionCurrentWeather = observer(props => {

  const { isLoding, weather } = appStore;

  return(
    <View style={ styles.container }>
      { !isLoding ? 
        <View>
          <Wind />
        </View> : null  
      }
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    //height: 145,
    marginTop: 3,
    backgroundColor: '#E8E9EB',
    borderRadius: 5,
  },
})