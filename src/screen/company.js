import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class company extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#b8b5ff',
                        paddingBottom: 20,
                        alignItems: 'center'
                    }}
                >
                    

                    <View style={styles.fethtrhjty}>
                        <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 20 }}>
                            Jobs Feeds:
                    </Text>
                    </View>






                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'column', marginLeft: 22, marginBottom: 15, }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#c15050', marginBottom: 10 }}>Graphic Designer</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, }}>Adobe Xd, Illustrator</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Waqar Raza</Text>
                            </View>
                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 15, color: '#413c69', marginLeft: 80 }}>28/5/2021</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#d3e0ea',
                            width: '100%',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center',
                            height: 40,
                            paddingLeft: 30,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 15, marginRight: 5 }} name={'star'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69', marginLeft: 5 }}>5.0</Text>
                            </View>

                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 16, color: '#374045' }}>Hyderabad, Pakistan</Text>


                        </View>


                    </TouchableOpacity>






                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'column', marginLeft: 22, marginBottom: 15, }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#c15050', marginBottom: 10 }}>Web Developer</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, }}>Html, Css, Javascript</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Yousuf Saleem</Text>
                            </View>
                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 15, color: '#413c69', marginLeft: 75 }}>04/2/2021</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#d3e0ea',
                            width: '100%',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center',
                            height: 40,
                            paddingLeft: 30,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 15, marginRight: 5 }} name={'star'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69', marginLeft: 5 }}>4.2</Text>
                            </View>

                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 16, color: '#374045' }}>Karachi, Pakistan</Text>


                        </View>


                    </TouchableOpacity>






                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'column', marginLeft: 22, marginBottom: 15, }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#c15050', marginBottom: 10 }}>
                                    Graphic Designer</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, }}>Adobe Photoshop</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Ahmed Aslam</Text>
                            </View>
                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 15, color: '#413c69', marginLeft: 90 }}>01/3/2021</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#d3e0ea',
                            width: '100%',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center',
                            height: 40,
                            paddingLeft: 30,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 15, marginRight: 5 }} name={'star'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69', marginLeft: 5 }}>3.9</Text>
                            </View>

                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 16, color: '#374045' }}>Islamabad, Pakistan</Text>


                        </View>


                    </TouchableOpacity>







                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ width: '100%', flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'column', marginLeft: 22, marginBottom: 15, }}>

                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#c15050', marginBottom: 10 }}>
                                    UI Designer
            </Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, }}>Adobe Xd</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Zeeshan Malik</Text>

                            </View>

                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 15, color: '#413c69', marginLeft: 90 }}>09/1/2021</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#d3e0ea',
                            width: '100%',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center',
                            height: 40,
                            paddingLeft: 30,
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 15, marginRight: 5 }} name={'star'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69', marginLeft: 5 }}>2.5</Text>
                            </View>

                            <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 16, color: '#374045' }}>Peshawar, Pakistan</Text>


                        </View>


                    </TouchableOpacity>
















                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

    fethtrhjty: {
        width: '100%',
        alignItems: 'flex-start',
        paddingVertical: 20,
        marginLeft: 70,
    },

    dfnjdebndev: {
        backgroundColor: '#fff',
        width: '88%',
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        paddingTop: 5,
        elevation: 4,
        borderRadius: 10,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'flex-end'


    },

});