import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import { Authcontext } from '../../components/navigation/context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { ImageBackground } from 'react-native';
import { SendOTP, CheckOTP } from '../../service/api/user/UserAuth';
import { KeyboardAvoidingView } from 'react-native';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -100


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var FinalContact = '';

export const SignIn = ({ navigation }) => {
  const [contact, setContact] = useState('');
  const [contactErr, setContactErr] = useState('');
  const [contactFocus, setContactFocus] = useState(false);
  const [contactErrStyle, setContactErrStyle] = useState(false);
  const input = React.createRef();

  async function SEND_OTP() {
    if (contact.length != 10) {
      setContactErr('enter a valid contact number');
      setContactErrStyle(true);
      input.current.shake();
      input.current.focus();
    } else {
      setContactErrStyle(false);
      setContactErr('');

      var res = await SendOTP(contact);


      if (res == 'success') {
        FinalContact = contact;
        navigation.navigate('CheckOtp');
      }
      else alert('OTP SERVER ERROR');
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={styles.IndexView}>
        <ImageBackground source={require('../../../asstes/images/topgearbg.jpg')} style={styles.image}>

          <View style={styles.View2}>
            <View style={{ height: '3%' }}></View>
            <View style={{
              borderColor: '#ac2c86',
              borderWidth: 1,
              borderRadius: 100,
              height: 123,
              width: 123,
            }}>
              <Image
                source={require('../../../asstes/images/phone2.png')}
                style={styles.LogoImage}
              />
            </View>

            <View style={{ height: '10%' }}></View>
            <Text
              style={{ fontSize: 25, textTransform: 'uppercase', color: 'white' }}>
              Contact Number
          </Text>
            <View style={{ height: 20 }}></View>
            <Text
              style={{ fontSize: 15, textTransform: 'capitalize', color: 'white' }}>
              You shall receive a SMS with Code for Verification.
          </Text>
            <View style={{ height: 50 }}></View>

            <Input
              value={contact}
              ref={input}
              onFocus={() => setContactFocus(true)}
              inputContainerStyle={[
                contactFocus ? styles.inputFocused : {},
                contactErrStyle ? styles.inputErr : {},
              ]}
              onChangeText={(contact) => setContact(contact)}
              maxLength={10}
              style={{ color: 'white' }}
              keyboardType={'number-pad'}
              placeholder="Enter Contact Number"
              leftIcon={<Icon name="mobile" size={30} color="#ac2c86" />}
              errorStyle={{ color: 'red', textTransform: 'capitalize' }}
              errorMessage={contactErr}
            />

            <View style={{ height: '3%' }}></View>

            <View style={styles.Next_button}>
              <Button
                onPress={SEND_OTP}
                buttonStyle={[styles.ButtonStyle, styles.ButtonSignInStyle]}
                title="GET OTP"></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};
export const CheckOtp = ({ navigation }) => {
  const { signIn } = useContext(Authcontext);

  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [validOTP, setvalidOTP] = useState(true);
  const [InValidOTP, setInValidOTP] = useState(false);

  useEffect(() => {
    if (value.length == 4) {
      CHECK_OTP()
    }
    else {
      setvalidOTP(true);
      setInValidOTP(false);
    }
  });



  async function CHECK_OTP() {
    if (value.length == 4) {
      var res = await CheckOTP(FinalContact, value);
      if (res == 'success') {
        setInValidOTP(false);
        setvalidOTP(true);
        signIn(FinalContact, value);
      } else {
        setInValidOTP(true);
        setvalidOTP(false);
      }
    }

  }
  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={styles.IndexView}>
        <ImageBackground source={require('../../../asstes/images/topgearbg.jpg')} style={styles.image}>




          <View style={styles.View2}>
            <View style={{ height: 10 }}></View>

            <View style={{
              height: 122,
              width: 122,
              borderColor: '#ac2c86',
              borderWidth: 1,
              borderRadius: 100,
            }}>
              <Image
                source={require('../../../asstes/images/lock1.png')}
                style={styles.LogoImage2}
              />
            </View>

            <View style={{ height: '7%' }}></View>
            <Text
              style={{ fontSize: 25, textTransform: 'uppercase', color: 'white' }}>
              Verification Code
          </Text>
            <View style={{ height: 20 }}></View>
            <Text
              style={{ fontSize: 15, textTransform: 'capitalize', color: 'white' }}>
              enter otp sent to your number
          </Text>
            <View style={{ height: 50 }}></View>

            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              //textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[
                    validOTP ? styles.cell : styles.cellErr,
                    isFocused && styles.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

            <View style={{ height: '6%' }}></View>

            <Text
              style={[
                InValidOTP ? styles.InValidOtpTrue : styles.InValidOtpFalse,
              ]}>
              Invalid otp
          </Text>

            <View style={styles.Next_button}>
              <Button
                onPress={CHECK_OTP}
                buttonStyle={[styles.ButtonStyle, styles.ButtonSignInStyle]}
                title="SUBMIT"></Button>
            </View>
          </View>




        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

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
  LoginView: {
    height: height,
  },

  Next_button: {
    padding: 20,
    marginTop: 20,
  },

  inputFocused: {
    borderBottomColor: '#ac2c86',
    borderBottomWidth: 2,
  },

  inputErr: {
    borderBottomColor: 'red',
  },

  backgroundImage: {
    width: '500%',
  },

  LogoImage: {
    height: 120,
    width: 120,
    resizeMode: 'stretch',
  },
  LogoImage2: {
    height: 120,
    width: 120,
    resizeMode: 'stretch',
  },
  LogoView: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  View2: {
    flex: 1,
    padding: 20,

    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#0000008f',
    width: '100%',
    height: '100%',
  },

  ButtonStyle: {
    backgroundColor: '#2288dc',
    borderRadius: 100,
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    justifyContent: 'space-between',
    textTransform: 'uppercase',
  },

  ButtonSignInStyle: {
    backgroundColor: '#ac2c86',
  },

  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: 'white',
    textAlign: 'center',
    color: 'white',
    marginLeft: 20,
  },
  cellErr: {
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: 'red',
    textAlign: 'center',
    color: 'white',
    marginLeft: 20,
  },
  focusCell: {
    borderBottomColor: '#ac2c86',
    height: 60,
    width: 60,
  },
  InValidOtpFalse: {
    display: 'none',
  },
  InValidOtpTrue: {
    display: 'flex',
    color: 'red',
    textTransform: 'uppercase',
  }
});
