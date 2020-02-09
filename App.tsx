import React from 'react';
import { StyleSheet, View} from 'react-native';
import { observer } from 'mobx-react';
import { Navbar } from 'components/Navbar/index'

@observer
class App extends React.Component<{}> {
  render() {

    return (
      <View style={styles.container}>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
  },
});

export default App;
