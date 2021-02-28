import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <TouchableOpacity onPress={() => {
                        
                        this.props.navigation.replace('Login');
                    }} style={styles.dfnjdebndev}>
                <Text>
                   This is Home Page
                </Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dfnjdebndev:{
        backgroundColor: 'pink'
    }
});