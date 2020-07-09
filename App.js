import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Allcountry from './Screens/Allcountry'
import SingleCountry from './Screens/individual'
import Search from './Screens/search'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" 
        component={Allcountry} 
        title={"Welcome"}
      />
      <Stack.Screen name="SingleCountry" 
        component={SingleCountry} />
        
      <Stack.Screen name="Search" 
        component={Search} />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
