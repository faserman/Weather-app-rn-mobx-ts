import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { appStore } from 'store/app';
import { DailyForecastItem } from 'components/DailyForecastList/DailyForecastItem/index';

export const DailyForecastList = observer(props => {

  const { dailyForecast, isLoding } = appStore;

  return(
    <View style={ styles.container }>
      { !isLoding ? <FlatList
        style={ styles.list }
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        data={ dailyForecast }
        renderItem={({item}) => 
          <DailyForecastItem forecast={item} />
        }   
      /> : null }
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    height: 145,
    marginTop: 3,
    backgroundColor: '#E8E9EB',
    borderRadius: 5,
  },
  list: {
    
  }
})