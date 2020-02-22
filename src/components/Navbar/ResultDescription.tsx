import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  Text, 
  View, 
  TouchableOpacity,
  ActivityIndicator,
  } from 'react-native';
import { appStore } from 'store/app';

@observer
class ResultDescription extends React.Component {

  state = {
    toggle: true,
  };

  onPress = () => {
    appStore.setToggleView(true);
  };

  toggleView = () => {
    this.setState({
      toggle: false,
    })
  };

  render() {

    const { navbar } = appStore;
    const { toggle } = this.state;

    setTimeout(this.toggleView, 1500);

    return(
      <View style={ styles.cityName }>
        <TouchableOpacity
          onPress={ this.onPress }
          >
          <View>
            { toggle ? <ActivityIndicator size='small' color='#49B8EC' /> :
              <Text style={styles.text}>{ navbar }</Text> }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

  
const styles = StyleSheet.create({
  cityName: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: '#1E1E1E',
    padding: 5,
  },
})

export default ResultDescription; 