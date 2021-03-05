import React, { Component } from 'react';
import { View, Image } from 'react-native';
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


                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View>

                    <Image
                        source={require("../../assets/image/work.png")}
                        resizeMode="contain"
                        style={{width: 110}}
                    />
                </View>

                <LottieView
                    style={{
                        width: 170,
                        marginBottom: 100,
                    }}
                    source={require('../../assets/load.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {

                        this.props.navigation.replace('Mainpagelogin');
                    }}
                />
            </View>
        )
    }
}