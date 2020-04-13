import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { observer } from 'mobx-react';
import { Navbar } from 'components/Navbar/index';
import { CurrentWeather } from 'components/CurrentWeather';
import { DailyForecastList } from 'components/DailyForecastList/index';
import { DescriptionCurrentWeather } from 'components/DescriptionCurrentWeather/index';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {

    const { toggleView, weatherDescriptionImage } = appStore;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `https://source.unsplash.com/720x1560/?nature${ weatherDescriptionImage }`}}
        />
        <Navbar />
        {!toggleView ? 
          <View>
            <CurrentWeather />
            <DailyForecastList />
            <DescriptionCurrentWeather />
          </View> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});

export default App;
