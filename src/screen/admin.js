import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class admin extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: '#b8b5ff',
                        paddingBottom: 20,
                        alignItems: 'center',

                    }}
                >

                    <View style={styles.fethtrhjty}>
                        <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19 }}>
                            Campass Manage:
                    </Text>
                    </View>




                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                        <View style={styles.dfnjdebndev}>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                                <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 18, marginBottom: 5 }} name={'building'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69' }}>Company jobs</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff884b' }}>Total Registered:</Text>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f', }}>57</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                        width: "70%",
                                        marginTop: 15,
                                    }}
                                />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-evenly' }}>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#ff577f', fontSize: 18, marginBottom: 5 }} name={'trash-alt'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f' }}>Delete</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#00917c', fontSize: 18, marginBottom: 5 }} name={'edit'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#00917c' }}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>











                        <View style={styles.dfnjdebndev}>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                                <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 18, marginBottom: 5 }} name={'user-graduate'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69' }}>Students</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff884b' }}>Total Registered:</Text>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f', }}>27</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                        width: "70%",
                                        marginTop: 15,
                                    }}
                                />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-evenly' }}>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#ff577f', fontSize: 18, marginBottom: 5 }} name={'trash-alt'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f' }}>Delete</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#00917c', fontSize: 18, marginBottom: 5 }} name={'edit'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#00917c' }}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>


                    </View>


                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                        <View style={styles.dfnjdebndev}>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                                <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 18, marginBottom: 5 }} name={'envelope'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69' }}>Applications</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff884b' }}>Total Accepted:</Text>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#fa1e0e', }}>07</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                        width: "70%",
                                        marginTop: 15,
                                    }}
                                />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-evenly' }}>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#ff577f', fontSize: 18, marginBottom: 5 }} name={'trash-alt'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f' }}>Delete</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#00917c', fontSize: 18, marginBottom: 5 }} name={'edit'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#00917c' }}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>








                        <View style={styles.dfnjdebndev}>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                                <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 18, marginBottom: 5 }} name={'envelope'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69' }}>Applications</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff884b' }}>Total Rejected:</Text>
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#fa1e0e', }}>17</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                        width: "70%",
                                        marginTop: 15,
                                    }}
                                />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-evenly' }}>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#ff577f', fontSize: 18, marginBottom: 5 }} name={'trash-alt'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#ff577f' }}>Delete</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>

                                    <TouchableOpacity style={{ alignItems: 'center', }}>
                                        <FontAwesome5 style={{ color: '#00917c', fontSize: 18, marginBottom: 5 }} name={'edit'} />
                                        <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#00917c' }}>Edit</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>


                    </View>















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
        width: '42%',
        height: 230,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        paddingVertical: 15,
        elevation: 4,
        borderRadius: 10,
        marginBottom: 20
    },

});