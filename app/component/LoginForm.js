import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';



export class LoginForm extends Component {
   

    login(){
        console.log("I am hitting button ")
    }
    render() {
        return ( 
            <View>
                <Text>Login</Text>
                <TextInput
                    placeholder="Enter your name"
                />
                <TouchableOpacity onPress={this.login}><Text>Click Me</Text></TouchableOpacity>
            </View>
        )
    }
}