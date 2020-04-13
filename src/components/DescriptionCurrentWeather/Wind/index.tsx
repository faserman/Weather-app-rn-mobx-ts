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
      <Image
        style={ styles.windIcon }
        source={{uri: "https://img.icons8.com/officel/80/000000/wind.png"}}
      >
      </Image>
      <View style={ styles.windDescription }>
        <Text>{ weather.windVerbalDesignation }</Text>
        <Text>Wind force: { weather.windForce } m/s</Text>
        <Text>Wind direction: { weather.windDirection }</Text>
      </View>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 104,
    margin: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
  },
  windIcon: {
    width: 80,
    height: 80,
  },
  windDescription: {
    marginLeft: 3,
    flexDirection: "column",
  },
  text: {

  },
})
