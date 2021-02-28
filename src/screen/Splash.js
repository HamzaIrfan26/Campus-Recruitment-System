import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    paddingBottom: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <LottieView
                    style={{width: 200,
                        height: 200,
                        backgroundColor: '#fff',
                        }}
                    source={require('../../assets/whatsapp1.json')}
                    autoPlay
                    loop={false}
                    speed={0.6}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Login');
                    }}
                />
            </View>
        )
    }
}