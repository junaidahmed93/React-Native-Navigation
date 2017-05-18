import React, { Component } from 'react';
import { Text, View,  } from 'react-native';



export class Home extends Component {
   

    login(){
        console.log("I am hitting button ")
    }
    render() {
        return ( 
            <View>
                <Text>Welcome to the Home</Text>                      
            </View>
        )
    }
}