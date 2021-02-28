import React from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import Home from './src/screen/Home'

const Stack = createStackNavigator();

function App() {
  return (
    

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    
  );
};

const styles = StyleSheet.create({

});

export default App;
