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


import student from './src/screen/student'
import company from './src/screen/company'
import admin from './src/screen/admin'
import Login from './src/screen/Login';
import Mainpagelogin from './src/screen/Mainpagelogin';
import Option from './src/screen/Option';
import Signup from './src/screen/Signup';


const Stack = createStackNavigator();

function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        cardStyle: { backgroundColor: '#fff' },
      }}>

        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{ title: 'Campus Recruipment'}} name="Mainpagelogin" component={Mainpagelogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{ title: 'Campus Recruipment'}} name="Option" component={Option} />
        <Stack.Screen options={{ title: 'Student', headerLeft: null }} name="student" component={student} />
        <Stack.Screen options={{ title: 'Admin Dashboard', headerLeft: null }} name="admin" component={admin} />
        <Stack.Screen options={{ title: 'Company', headerLeft: null }} name="company" component={company} />
        


      </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({

});

export default App;
