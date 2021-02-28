import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


function Login() {
  return (
    <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <TouchableOpacity style={styles.dfnjdebndev}>
                <Text>
                   Continue with Google
                </Text>

                </TouchableOpacity>
            </View>
  );
}

const styles = StyleSheet.create({
  dfnjdebndev:{
      borderColor: 'lightgrey',
      borderWidth: 2,
      width: 230,
      height: 50,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 30
  }
});

export default Login;
