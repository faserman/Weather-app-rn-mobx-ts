import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, TextInput, View } from 'react-native';
import { appStore } from 'store/app';

export const Search = observer(props => {

  const { value } = appStore;

  const onChangeText = (text: string) => {
    appStore.setValue(text);
  };

  return(
    <View>
      <TextInput
      style={styles.input}
      onChangeText={ onChangeText }
      value={value}
      placeholder='Please enter a city name...'
      />
    </View>
  )

})

const styles = StyleSheet.create({
  input: {
    width: '90%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#49B8EC',
  }
})
