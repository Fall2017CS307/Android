//import React from 'react';
// Importing libraries
//import { AppRegistry } from 'react-native';
import LoginPage from './src/components/LoginPage';
import Registration from './src/components/Registration';
//import Landing from './src/components/Landing';
import PasswordReset from './src/components/PasswordReset';
import Payments from './src/components/Payments';
import TextAnnotation from './src/components/TextAnnotation';
//import { StackNavigator } from 'react-navigation';

//import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';/*
const App = StackNavigator({
  Login: { screen: LoginPage },
  Registration: { screen: Registration },
  Landing: { screen: Landing },
  Reset: { screen: PasswordReset }
});
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var swiper = React.createClass({
  render: function() {
    console.disableYellowBox = true;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
        <Router />
        </View>
      </Provider>
    )
  }
})

AppRegistry.registerComponent('Datonate', () => swiper);

// Rendering
//AppRegistry.registerComponent('Datonate', () => App);
