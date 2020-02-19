import React from 'react';
import { StyleSheet, View} from 'react-native';
import { observer } from 'mobx-react';
import { Navbar } from 'components/Navbar/index';
import { TestResult } from 'components/TestResult';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {
    const { toggleView } = appStore;

    return (
      <View style={styles.container}>
        <Navbar />
        {toggleView ? <TestResult /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  },
});

export default App;
