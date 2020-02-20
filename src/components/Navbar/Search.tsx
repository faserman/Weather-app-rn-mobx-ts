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

  const { value, gettingWeather } = appStore;

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
        onPress={ gettingWeather }
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
    marginTop: 5,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB6E4B',
    width: '20%',
    marginLeft: 3,
    padding: 1,
    borderRadius: 5,
  },
  input: {
    width: '80%',
    padding: 7,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#EB6E4B',
    borderRadius: 10,
    color: '#1E1E1E',
    fontSize: 25
  },
  image: {
    width: 30,
    height: 30,
  }
})
