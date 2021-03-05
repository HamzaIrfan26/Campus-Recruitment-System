import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mainpagelogin = ({ navigation }) => {


  return (
    <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <LottieView
          style={{
            width: 280,
            height: 280,
            backgroundColor: '#fff',
          }}
          source={require('../../assets/workin-man.json')}
          autoPlay
          loop={true}
          speed={0.5}

        />
        <Text style={{width: 250,fontFamily:'ProductSansBold',fontSize: 25, textAlign:'center',color: '#ec4646'}}>Welcome To Campus Recruipment</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.login} >
          <Text style={styles.logintext}>
          Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.signup}>
          <Text style={[styles.logintext,{color: 'white'}]}>
          Login
          </Text>
        </TouchableOpacity>



      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

  login:{
    borderColor: '#f25287',
    borderWidth: 3,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },

  logintext:{
    fontSize: 22,
    fontFamily: 'ProductSansRegular',
    color: '#435560'
  },
 
  signup:{
    backgroundColor: '#f25287',
    
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },

  
});

export default Mainpagelogin;
