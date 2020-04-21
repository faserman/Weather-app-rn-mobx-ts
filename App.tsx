import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { observer } from 'mobx-react';
import { LinearGradient } from 'expo-linear-gradient';
import { Navbar } from 'components/Navbar/index';
import { ResultDescription } from 'components/ResultDescription/index';
import { appStore } from 'store/app';

@observer
class App extends React.Component<{}> {
  render() {

    const {
      successfulRequest,
      backgroundImg,
      randomBackgroundImage,
    } = appStore;
    const image = successfulRequest ? backgroundImg : randomBackgroundImage;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: image}}
        />
        { successfulRequest ? <LinearGradient 
          colors={['rgba(246, 248, 250, 1)', 'transparent']}
          start={[0.4, 0.4]}
          end={[0.4, 0]}
          locations={[0,0.5,]}
          style={styles.gradient}
        /> : null }
        <Navbar />
        <ResultDescription />
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
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1110,
  }
});

export default App;