import { TabNavigator } from "react-navigation";

import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './app/component/ChatScreen';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'LUCKY' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return <View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>


  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <View>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
  }
}

// Tabs Navigation show tab in page
const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

// The Stack Navigation Show Main pages
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats'
}

AppRegistry.registerComponent('people', () => SimpleApp);