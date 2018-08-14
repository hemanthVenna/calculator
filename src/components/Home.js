import React, { Component } from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render(){
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('TaskScreen')} title="Calculator" >Go To Calculator</Button>
            </View>
        )
    }
   
}
