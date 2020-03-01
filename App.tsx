import React from 'react';
import { StyleSheet, View} from 'react-native';
import { observer } from 'mobx-react';
import { Navbar } from 'components/Navbar/index';
import { CurrentWeather } from 'components/WeatherDescription/CurrentWeather';
//import { TestResult } from 'components/WeatherDescription/TestResult';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {
    const { toggleView } = appStore;

    return (
      <View style={styles.container}>
        <Navbar />
        {!toggleView ? <CurrentWeather /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F2',
  },
});

export default App;
