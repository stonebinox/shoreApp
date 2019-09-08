/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SplashScreen } from './src/components/splashscreen/SplashScreen';
import { Home } from './src/components/home/Home';

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerLeft: null,
    }),
  },
});

const App = createAppContainer(MainNavigator);

export default App;
