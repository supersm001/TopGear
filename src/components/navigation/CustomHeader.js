import React, { useEffect, useState, useMemo, useReducer } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import { SignIn } from '../../screen/user/SignIn';
import { DrawerNavigation } from '../navigation/DrawerNavigation';
import { AuthStackNavigation } from '../navigation/StackNavigation';
import { Authcontext } from '../navigation/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SendOTP, CheckOTP } from '../../service/api/user/UserAuth';

export const CustomHeader = () => {

    //const [isLoading, setIsLoading] = useState(true);
    //const [userToken, setUserToken] = useState(true);


    const initialLoginState = {
        isLoading: true,
        userContact: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userContact: action.contact,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userContact: action.contact,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userContact: null,
                    userToken: null,
                    isLoading: false
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userContact: action.contact,
                    userToken: action.token,
                    isLoading: false
                };
        }

    };

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);


    const authContext = useMemo(() => ({
        signIn: async (contact, otp) => {
            let userToken = null;

            //    var res = await CheckOTP(contact, otp);
            //if (userToken == "asd") {
            //  if (res == 'success') {

            // Get UserToken From Session

            userToken = 'ASD';

            try {
                await AsyncStorage.setItem('userToken', userToken)
            } catch (e) {
                console.log("SignUp AsyncStorage Error : ", e);
            }
            //}
            dispatch({ type: 'LOGIN', contact: contact, token: userToken });
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken')
            } catch (e) {
                console.log("SignOut AsyncStorage Error : ", e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
            userToken = 'ASD';
            setIsLoading(false);
        },

    }), []); // authContext Close


    useEffect(() => {
        setTimeout(async () => {

            let userToken = null;

            try {
                userToken = await AsyncStorage.getItem("userToken");
            } catch (e) {
                console.log("UseEffect AsyncStorage Error : ", e);
            }
            dispatch({ type: 'REGISTER', token: userToken });
        }, 1000);
    }, []); // useEffect Close


    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7b1fa2' }} >
                {/* <ActivityIndicator size='large' color='white' /> */}
                <Image source={require("../../../asstes/images/splash.png")} style={{ height: '100%', width: '100%' }} />
            </View>
        )
    }  // isLoading Close

    return (
        <Authcontext.Provider value={authContext}>
            {loginState.userToken != null ? (<DrawerNavigation />) : (<AuthStackNavigation />)}
        </Authcontext.Provider>
    );
};


