import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUp, CheckOtp2 } from '../../screen/user/SignUp';
import { SignIn, CheckOtp } from '../../screen/user/SignIn';
import { IndexPage } from '../../screen/user/Index';

const Stack = createStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4a0072" />
      <Stack.Navigator initialRouteName="IndexPage">
        <Stack.Screen
          name="IndexPage"
          component={IndexPage}
          options={{
            title: '',
            headerStyle: { height: 0 },
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'SIGN IN',
            headerStyle: {
              backgroundColor: '#7b1fa2',
              height: 40,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'SIGN UP',
            headerStyle: {
              backgroundColor: '#7b1fa2',
              height: 40,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CheckOtp"
          component={CheckOtp}
          options={{
            title: 'VERIFY OTP',

            headerStyle: {
              backgroundColor: '#7b1fa2',
              height: 40,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CheckOtp2"
          component={CheckOtp2}
          options={{
            title: 'VERIFY OTP',

            headerStyle: {
              backgroundColor: '#7b1fa2',
              height: 40,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
