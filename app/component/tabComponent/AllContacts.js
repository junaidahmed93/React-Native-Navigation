import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class AllContactsScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('ChatScreen')}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}