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

  const { successfulRequest } = appStore;

  return(
    <View style={ styles.container }>
      { successfulRequest ? 
        <View>
          <Wind />
        </View> : null  
      }
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    borderRadius: 5,
  },
})

/*
<Text style={ styles.feelsLikeTemp }>feels like: { celsiusTempMode ? weather.celsiusFeelsLike : weather.fahrenheitFeelsLike } 
    { celsiusTempMode ? <Text>&#8451;</Text> : <Text>&#8457;</Text> }
</Text>
*/