import React from 'react';
import { StyleSheet, View} from 'react-native';
import { observer } from 'mobx-react';
import { Navbar } from 'components/Navbar/index';
import { CurrentWeather } from 'components/CurrentWeather';
import { DailyForecastList } from 'components/DailyForecastList/index';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {
    const { toggleView } = appStore;

    return (
      <View style={styles.container}>
        <Navbar />
        {!toggleView ? 
          <View>
            <CurrentWeather />
            <DailyForecastList />
          </View> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E9EB'
  },
});

export default App;
