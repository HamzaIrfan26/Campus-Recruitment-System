import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class student extends Component {
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
                            Your Profile:
                    </Text>
                    </View>






                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 25, paddingBottom: 17 }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>

                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#8f4068' }}>Personal Deatails:</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>Ameer Hamza Irfan</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>ameerhamzairfan@gmail.com</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>0331 2512321</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>Flat 909, Jama Residency, Karachi</Text>
                            </View>
                        </View>


                    </TouchableOpacity>




                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 25, paddingBottom: 17 }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 13, }}>

                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#8f4068' }}>Your Jobs:</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>Upload: 6 Days ago</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>Skill: React Js Developer</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19, color: '#28527a', paddingVertical: 3 }}>Experience: 5 Years</Text>
                                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', marginTop: 18, marginLeft: 15 }}>
                                    <FontAwesome5 style={{ color: '#e40017', fontSize: 20, marginBottom: 5 }} name={'edit'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#e40017', marginLeft: 5 }}>Edit</Text>
                                </TouchableOpacity>
                            </View>
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
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        paddingVertical: 12,
        elevation: 4,
        borderRadius: 30,
        marginBottom: 20
    },

});