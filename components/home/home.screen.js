import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './home.style';

import Toolbar from './toolbar'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Toolbar/>
    </View>
  );
}

export default HomeScreen;


