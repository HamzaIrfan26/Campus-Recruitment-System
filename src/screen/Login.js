import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const Login = ({ navigation }) => {

  const [textInputName, setTextInputName] = React.useState('');
  const [textInputEmail, setTextInputEmail] = React.useState('');


  const company = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please also enter Email');
      return;
    }

    navigation.replace('Option');
  };



  return (
    <ScrollView>


      <View style={{

        width: '100%',
        alignItems: 'center'
      }}
      >

        <View style={{ width: '100%', height: '100%' }}>
          <LottieView
            style={{
              width: '100%',
              backgroundColor: '#fff',
            }}
            source={require('../../assets/gredient-background.json')}
            autoPlay
            loop={true}
            speed={0.8}

          />
        </View>


        <Animatable.View
        
          animation= "bounceInUp"        
        style={{

          width: '90%',
          height: 400,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          position: 'absolute',
          top: 60,
          paddingVertical: 20,
        }}>

          <Text style={[styles.jwvnvnm, { fontSize: 25, marginTop: 10, fontFamily: 'ProductSansBold', marginBottom: 20, }]}>Welcome Back!</Text>
          <View style={styles.nmjijiqwig} >

            <TextInput

              onChangeText={
                (value) => setTextInputName(value)
              }
              keyboardType={'email-address'} autoCapitalize='none' style={styles.vsbfbsvhje} placeholder="Enter Your Email" />
          </View>

          <View style={styles.nmjijiqwig} >

            <TextInput onChangeText={(value) => setTextInputEmail(value)} secureTextEntry={true} style={styles.vsbfbsvhje} placeholder="Enter Your Password" />

          </View>
          <View style={styles.njadvsngfn}>

            <TouchableOpacity>
              <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, fontFamily: 'ProductSansBold' }]}>Forgot Password?</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity onPress={company} style={{ backgroundColor: '#df7861', width: 200, alignItems: 'center', justifyContent: 'center', height: 50, marginTop: 40, borderRadius: 50, marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontFamily: 'ProductSansBold', color: 'white' }}>
              Next
              </Text>
          </TouchableOpacity>

        </Animatable.View>
      </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  nhjunhjunj: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dfnjdebndev: {
    backgroundColor: '#8f4068',
    borderWidth: 0,
    width: 90,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,

  },
  nmjijiqwig: {
    width: '90%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: -5,
    marginTop: 0,

  },
  jwvnvnm: {
    fontSize: 18,
    marginLeft: 5,
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular'
  },
  vsbfbsvhje: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 2,
    paddingLeft: 18,
    paddingTop: 13,
    marginBottom: 10,
    marginTop: 10,

    fontSize: 17,
    fontFamily: 'ProductSansRegular'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button: {
    width: '70%',
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  njadvsngfn: {

    alignItems: 'flex-end',

    marginBottom: 5,
    width: '100%',
    paddingHorizontal: 30
  },
});

export default Login;
