import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styles from './home.style';

export default class Toolbar extends React.Component {
  render () {
    return(
      <View style={styles.title}>
        <Text style={styles.title}>Facebook</Text>
      </View>
    )
  }
}
/*
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  }
});*/