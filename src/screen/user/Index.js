import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Button, Text } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const IndexPage = ({ navigation }) => {

    return (
        <View style={styles.IndexView}>
            <ImageBackground source={require('../../../asstes/images/topgearbg.jpg')} style={styles.image}>


                <View style={styles.View2}>



                    <View style={styles.LogoView}>
                        <Image source={require('../../../asstes/images/top_gear.png')} style={styles.LogoImage} />
                    </View>


                    <Text style={{ fontSize: 20, color: 'white' }}>Welcome To</Text>

                    <Text style={{ fontSize: 28, color: 'white', textAlign: "center" }}>TOP GEAR ONLINE SERVICES PVT. LTD.</Text>


                    <View style={{ width: '100%', height: 90, alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate("SignUp")}>
                            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
                                <Text style={{ color: 'white' }}>
                                    SIGN UP
                           </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate("SignIn")}>
                            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
                                <Text style={{ color: 'white' }}>
                                    SIGN IN
                           </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 15, color: 'white' }}> Copyright &copy; 2021-2022. All Rights Reserved </Text>

                </View>



            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({

    IndexView: {
        height: height,
        width: width,
    },
    image: {
        flex: 1,
        height: height + 5,
        resizeMode: "cover",

    },
    LogoImage: {

        height: 100,
        width: 250,

        resizeMode: 'stretch',

    },
    LogoView: {


    },
    View2: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#0000008f',
        width: '100%',
        height: '100%',
    },
    TextStyle: {
        color: "white",
        fontSize: 20
    },

    backgroundImage: {
        width: '350%',
    },



    ButtonStyle: {
        height: 40,
        width: '50%',
        borderRadius: 50,
        borderColor: 'white',
        //  borderWidth: 1,
    },

    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

})