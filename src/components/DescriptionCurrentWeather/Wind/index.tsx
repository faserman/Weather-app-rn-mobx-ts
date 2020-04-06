import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import { appStore } from 'store/app';

export const Wind = observer(props => {

  const { weather } = appStore;

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Wind: </Text>
      <View style={ styles.wind }>
        <Image
          style={ styles.windIcon }
          source={{uri: "https://img.icons8.com/officel/80/000000/wind.png"}}
        >
        </Image>
        <View style={ styles.windDescription }>
          <Text>{ weather.windSpeed } m/s</Text>
          <Text>{ weather.windDeg }</Text>
        </View>
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 104,
    margin: 3,
    backgroundColor: '#F6F8FA',
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    marginLeft: 5
  },
  wind: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  windIcon: {
    width: 80,
    height: 80,
  },
  windDescription: {
    marginLeft: 3,
    flexDirection: "column",
    
    alignSelf: 'center',
  },
  text: {

  },
})