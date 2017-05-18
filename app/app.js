import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {LoginForm} from './component/LoginForm';


export default class App extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello To The Future</Text>
                <LoginForm/>
            </View>
 
        )
    }
}  