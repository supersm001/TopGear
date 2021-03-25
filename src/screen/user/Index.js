import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import { Button, Text } from 'react-native-elements';
import { ImageBackground } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const IndexPage = ({ navigation }) => {

    return (
        <View style={styles.IndexView}>
            <ImageBackground source={require('../../../asstes/images/topgearbg.jpg')} style={styles.image}>


                <View style={styles.View2}>

                    <View style={{ height: 30 }} />

                    <View style={styles.LogoView}>
                        <Image source={require('../../../asstes/images/top_gear.png')} style={styles.LogoImage} />
                    </View>

                    <View style={{ height: 40 }} />
                    <Text style={{ fontSize: 20, color: 'white' }}>Welcome To</Text>
                    <View style={{ height: 30 }} />
                    <Text style={{ fontSize: 28, color: 'white', textAlign: "center" }}>TOP GEAR ONLINE SERVICES PVT. LTD.</Text>

                    <View style={{ height: '20%' }} />

                    <View style={styles.ButtonDiv}>
                        {/* <Button buttonStyle={[styles.ButtonStyle, styles.ButtonSignUpStyle]} title='SIGN UP ' iconRight icon={<Icon name="arrow-right"  size={15} color="white"/>}></Button> */}
                        <Button onPress={() => navigation.navigate("SignUp")} buttonStyle={[styles.ButtonStyle, styles.ButtonSignUpStyle]} title='SIGN UP '></Button>
                        <View style={{ height: 20 }} />
                        <Button onPress={() => navigation.navigate("SignIn")} buttonStyle={[styles.ButtonStyle, styles.ButtonSignInStyle]} title='SIGN IN '></Button>
                    </View>

                    <View style={{ height: 20 }} />
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
        // justifyContent: 'center',
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

    ButtonDiv: {
        padding: 20,

    },

    ButtonStyle: {
        backgroundColor: '#2288dc',
        borderRadius: 100,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 10,
        justifyContent: 'space-between',
        textTransform: 'uppercase',
        borderWidth: 1,
    },

    ButtonSignInStyle: {
        backgroundColor: '#ac2c86',
    },

    ButtonSignUpStyle: {
        backgroundColor: '#ac2c86',
    }

})