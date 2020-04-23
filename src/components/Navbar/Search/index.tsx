import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { appStore } from 'store/app';

export const Search = observer(props => {

  const { value, gettingForecast } = appStore;

  const onChangeText = (text: string) => {
    appStore.setValue(text);
  };

  return(
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        onChangeText={ onChangeText }
        value={value}
        placeholder='Please enter a city name...'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={ gettingForecast }
      >
        <Image
          style={styles.image}
          source={{uri: "https://img.icons8.com/ios/40/000000/search--v1.png"}}
        />
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B5DDF5',
    width: '20%',
    marginLeft: 3,
    padding: 1,
    borderRadius: 5,
  },
  input: {
    width: '80%',
    padding: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    color: '#1E1E1E',
    fontSize: 23,
    borderBottomColor: '#B5DDF5',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  image: {
    width: 30,
    height: 30,
  }
})
