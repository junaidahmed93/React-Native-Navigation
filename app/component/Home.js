import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';



export class Home extends Component {
   

    login(){
        console.log("I am hitting button ")
    }
    render() {
        return ( 
            <View>
                <Text>Welcome to the Home </Text>      
                <TouchableOpacity ><Text>Click Me</Text></TouchableOpacity>        
            </View>
        )
    }
}