import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { LoginForm } from './component/LoginForm';

import { StackNavigator } from 'react-navigation';
import { TabNavigator} from 'react-navigation';

export default class App extends React.Component {
    static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('ChatScreen', {user:'Hehe'})}
          title="Chat with Lucy"
        />
      </View>
    );
  } 
}

// export const SimpleApp = StackNavigator({
//     HomeScreen : { screen : HomeScreen}
// })