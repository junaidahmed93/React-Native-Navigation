import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './app/app';
import ChatScreen from './app/component/Chat';   



// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() { 
//     return <Text>Hello, Navigation!</Text>; 
//   } 
// }  
  
const SimpleApp = StackNavigator({
  App: { screen: App },  
  ChatScreen: { screen: ChatScreen}
});

AppRegistry.registerComponent('people', () => SimpleApp);
