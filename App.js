
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/utils/Routes'


export default function App() {

  return (
    <View style={{ flex: 1 }} >
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}


