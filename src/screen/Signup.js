
import React, { Component } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';



const Signup = ({ navigation }) => {
  const [textInputName, setTextInputName] = React.useState('');
  const [textInputEmail, setTextInputEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');

  

  const admin = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!Password.trim()) {
      alert('Please enter Password');
      return;
    }
    if (!ConfirmPassword.trim()) {
      alert('Please confirm Password');
      return;
    }
    navigation.replace('Option');
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
        }}>
          <View style={styles.nmjijiqwig} >
            <TextInput
              placeholder="Name"
              onChangeText={
                (value) => setTextInputName(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            />
          </View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              autoCapitalize='none'
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={
                (value) => setTextInputEmail(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              placeholder="Password"
              onChangeText={
                (value) => setPassword(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder="Confirm Password"
              onChangeText={
                (value) => setConfirmPassword(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>



          
          <View style={styles.nhjunhjunj}>

            <TouchableOpacity onPress={admin} activeOpacity={0.5} style={styles.dfnjdebndev}>
              <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 18, fontFamily: 'ProductSansRegular' }]}>Next</Text>
            </TouchableOpacity>


          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
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
  dfnjdebndev: {
    backgroundColor: '#df7861',
    borderWidth: 0,
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginHorizontal: 5,

  },
  nmjijiqwig: {
    width: '90%',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 2,
    marginTop: 2,

  },
  njadvsngfn: {
    flex: 1,
    alignItems: 'flex-end',

    marginBottom: 5,
    width: '100%',
    paddingHorizontal: 30
  },
  jwvnvnm: {
    fontSize: 18,
    marginLeft: 5,
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular'
  },
  nhjunhjunj: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
});

export default Signup;