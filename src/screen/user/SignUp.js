import React, { useState, navigation, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import { Authcontext } from '../../components/navigation/context';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { SendOTP, CheckOTP, Registration, FetchSponsorName } from '../../service/api/user/UserAuth';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 40;

var FinalContact = '';

export const SignUp = ({ navigation }) => {
    const [sponserId, setSponserId] = useState('');
    const [sponserName, setSponserName] = useState("");
    const [name, setName] = useState('');
    const [fathername, setFatherName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setstate] = useState('');
    const [contact, setContact] = useState('');
    const [contactErr, setContactErr] = useState('');

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
            console.log(sponserId, sponserName, name, fathername, email, age, address, city, state, contact);
            var reg = await Registration(sponserId, sponserName, name, fathername, email, age, address, city, state, contact);

            if (reg == 'success') {
                var res = await SendOTP(contact);
                console.log(res);
                if (res == 'success') {
                    FinalContact = contact;
                    navigation.navigate('CheckOtp2');
                } else alert('OTP SERVER ERROR');
            }
        }
    }
    async function SponsorId(sponserId) {

        var reg = await FetchSponsorName(sponserId);
        const a = "";
        console.log(reg);
        if (reg != "null") {
            setSponserName(reg);
        }
        else {
            setSponserName(a);
        }

    }
    return (

        <View style={styles.LoginView}>
            <Image
                source={require('../../../asstes/images/topgearbg.jpg')}
                style={styles.backgroundImage}
            />

            <View style={styles.View2}>

                <View>
                    <Text style={styles.heading}>Sign Up</Text>
                </View>

                <Input
                    value={name}
                    ref={input}

                    inputContainerStyle={[
                        name ? styles.inputFocused : {},
                        !name ? !styles.inputFocused : {},
                    ]}
                    onChangeText={(name) => setName(name)}
                    maxLength={30}
                    style={{ color: 'white' }}
                    placeholder="Enter Full Name"
                    leftIcon={<Icon name="user" size={20} color="#7b1fa2" />}
                />

                <Input
                    value={email}
                    ref={input}

                    inputContainerStyle={[
                        email ? styles.inputFocused : {},
                        !email ? !styles.inputFocused : {},
                    ]}
                    onChangeText={(email) => setEmail(email)}
                    maxLength={30}
                    style={{ color: 'white' }}
                    placeholder="Enter Email"
                    leftIcon={<Icon type='FontAwesome' name="envelope" size={20} color="#7b1fa2" />}
                />

                <Input
                    value={address}
                    ref={input}

                    inputContainerStyle={[
                        address ? styles.inputFocused : {},
                        !address ? !styles.inputFocused : {},
                    ]}
                    onChangeText={(address) => setAddress(address)}
                    maxLength={30}
                    style={{ color: 'white' }}
                    placeholder="Enter Address"
                    leftIcon={<Icon type='FontAwesome' name="globe" size={20} color="#7b1fa2" />}
                />


                <Input
                    value={contact}
                    ref={input}

                    inputContainerStyle={[
                        contact ? styles.inputFocused : {},
                        !contact ? !styles.inputFocused : {},
                        contactErrStyle ? styles.inputErr : {},
                    ]}
                    onChangeText={(contact) => setContact(contact)}
                    maxLength={10}
                    style={{ color: 'white' }}
                    keyboardType={'number-pad'}
                    placeholder="Enter Contact Number"
                    leftIcon={<Icon name="mobile" size={30} color="#7b1fa2" />}
                    errorStyle={{ color: 'red', textTransform: 'capitalize' }}
                    errorMessage={contactErr}
                />



                <View style={styles.Next_button}>
                    <Button
                        onPress={SEND_OTP}
                        buttonStyle={[styles.ButtonStyle, styles.ButtonSignInStyle]}
                        title="Register"></Button>
                </View>
                <View style={{ height: 100 }}>

                </View>

            </View>
        </View>

    );
};

export const CheckOtp2 = ({ navigation }) => {
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
        <ScrollView >
            <View style={styles.OTPView}>
                <Image
                    source={require('../../../asstes/images/topgearbg.jpg')}
                    style={styles.backgroundImage}
                />

                <View style={styles.View2}>
                    <View style={{ height: 50 }}></View>
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

                    <View style={{ height: '10%' }}></View>

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
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    LoginView: {
        height: height,
    },
    OTPView: {
        height: height,
    },

    Next_button: {
        padding: 20,
        margin: 10,
    },

    inputFocused: {
        borderBottomColor: '#ac2c86',
        borderBottomWidth: 2,
    },

    inputErr: {
        borderBottomColor: 'red',
    },

    backgroundImage: {
        width: width,
        height: height,
        position: 'absolute',
        zIndex: -1
    },

    LogoImage: {
        borderColor: 'white',
        height: 120,
        width: 120,
        resizeMode: 'stretch',
    },
    LogoImage2: {
        borderColor: 'white',
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
        padding: 10,
        justifyContent: 'center',
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
    },
    heading: {
        fontSize: 25,
        textTransform: 'uppercase',
        color: 'white',
        marginBottom: 20
    }
});
