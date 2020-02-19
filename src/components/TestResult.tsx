import React from 'react';
import { observer } from 'mobx-react';
import { 
  StyleSheet,
  View,
  Text, 
} from 'react-native';
import { appStore } from 'store/app';

export const TestResult = observer(props => {

 const { testResult } = appStore;

  return(
    <View style={styles.result}>
      <Text style={styles.textResult}>{ testResult }</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#49B8EC',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  textResult: {
    color: '#fff',
    fontSize: 17,
  }
})
