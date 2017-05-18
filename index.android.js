import { TabNavigator } from "react-navigation";

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
import RecentChatsScreen from './app/component/tabComponent/RecentChat';
import AllContactsScreen from './app/component/tabComponent/AllContacts';




const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

  
// const SimpleApp = StackNavigator({
//   App: { screen: App },  
//   ChatScreen: { screen: ChatScreen}
// });

AppRegistry.registerComponent('people', () => MainScreenNavigator);
