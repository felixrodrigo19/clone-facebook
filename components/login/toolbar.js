import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from './login.style';

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.title}>Facebook</Text>
      </View>
    );
  }
}
