
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import fbScreen from "./screens/fb";
import inScreen from "./screens/in";

export default class  App extends React.Component {
  render(){
  return <AppContainer/>
    
  }
}
const TabNavigator = createBottomTabNavigator({
  fb:{screen:inScreen},
  in:{screen:fbScreen}

})
const AppContainer = createAppContainer(TabNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
