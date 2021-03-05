import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Option = ({ navigation }) => {
  

  return (
    <ScrollView>
      <View style={{
        flex: 1,
        paddingVertical: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
      >
        
        <View style={styles.nhjunhjunj}>
<Text style={[styles.jwvnvnm,{marginBottom: 30}]}>Select your Type:</Text>
        <TouchableOpacity  onPress={() => navigation.navigate("admin")} activeOpacity={0.5} style={styles.dfnjdebndev}>
          <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 18, fontFamily: 'ProductSansRegular' }]}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("student")} activeOpacity={0.5} style={styles.dfnjdebndev}>
          <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 18, fontFamily: 'ProductSansRegular' }]}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("company")} activeOpacity={0.5} style={styles.dfnjdebndev}>
          <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 18, fontFamily: 'ProductSansRegular' }]}>Company</Text>
        </TouchableOpacity>

        </View>

       


      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  nhjunhjunj:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  dfnjdebndev: {
    backgroundColor: '#eb596e',
    borderWidth: 0,
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30
    
    

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
    fontSize: 25,
    
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular',
    
  },
  vsbfbsvhje: {
    height: 50,
    width: '100%',
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingTop: 13,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    elevation: 4,
    fontSize: 16,
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
    flex: 1,
    alignItems: 'flex-end',

    marginBottom: 5,
    width: '100%',
    paddingHorizontal: 30
  },
});

export default Option;
