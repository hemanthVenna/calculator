/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Alert
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {createStackNavigator} from 'react-navigation'


import Header from './src/components/header';
import Home from './src/components/Home';
import reducers from './src/reducers';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const createStoreWithMiddleware = applyMiddleware()(createStore);

const AppNavigator = createStackNavigator({
  HomeScreen :{screen: Home,title:"Home"},
  TaskScreen:{screen:Header,title:"Calculator"}
})
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppNavigator/>
      </Provider>
    );
  }
}

