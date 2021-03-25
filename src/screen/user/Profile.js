import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchUserDetails, updateUserDetails } from '../../service/api/user/UserAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 65;

export const Profile = ({ navigation }) => {
  const [contact, setContact] = useState("");

  const [ShowContNet, setShowContNet] = useState(false)
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [address, setAddress] = useState('');



  const [edit, setEdit] = useState(false);
  const [input_border, setInputBorder] = useState(0);
  useEffect(() => {
    getcontact()

  }, []);
  async function getcontact() {
    const temp = await AsyncStorage.getItem('contact');
    setContact(temp);
  }
  async function getData() {
    let res = await fetchUserDetails(contact);
    //console.log(res);
    setName(res.user_firstname);

    setEmail(res.user_email);
    setMobile(res.user_contact);

    setAddress(res.user_address);



  }

  function saveHandler() {
    if (edit) {
      setInputBorder(0);
      setEdit(false);
      UserUpdate();
      storeData(name, email);
      alert('Successfully Updated');

    } else {
      alert('no changes made');
    }
  }

  function editHandler() {
    if (input_border == 0)
      setInputBorder(1);
    else
      setInputBorder(0);
    if (!edit)
      setEdit(true);
    else
      setEdit(false);
  }

  const storeData = async (name, email) => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
    } catch (e) {
      console.log(e)
    }
  }


  function UserUpdate() {
    //  console.log("update Initialised");
    //  console.log(name, fathername, email,age, address, city, stat)
    var res = updateUserDetails(name, email, mobile, address);
    // console.log(res.data);
    if (res != 'error') {

      console.log("data Updated")
    } else {
      console.log('Failed to fetch the data')
    }


  }
  const netShow = <TouchableOpacity >
    <CheckBox
      value={ShowContNet}
      onValueChange={(newVlue) => {
        setShowContNet(newVlue);
        if (newVlue)
          ToastAndroid.show("Contact Show On Network", ToastAndroid.SHORT);
        else
          ToastAndroid.show("Contact Not Show On Network", ToastAndroid.SHORT);
      }} />
  </TouchableOpacity>;

  return (

    <View style={styles.IndexView}>
      <Image onLoad={getData}
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.backgroundImage}
      />
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} style={styles.View2}>
        <View style={styles.profilePicView}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require('../../../asstes/images/userLogo.png')}
          />
        </View>
        <View style={styles.profilePicView}>
          <Text style={styles.title}>{name}</Text>
        </View>

        <View style={styles.userDetailsView}>
          <View style={styles.left}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 5,
              }}>
              <Icon name="id-badge" size={15} color="#ac2c86" />
              <Text style={styles.textStyle}>name</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 5,
              }}>
              <Icon name="envelope-o" size={15} color="#ac2c86" />
              <Text style={styles.textStyle}>email</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 5,
              }}>
              <Icon name="address-book-o" size={15} color="#ac2c86" />
              <Text style={styles.textStyle}>mobile</Text>
            </View>



            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: 5,
              }}>
              <Icon name="globe" size={15} color="#ac2c86" />
              <Text style={styles.textStyle}>address</Text>
            </View>


          </View>


          <View style={styles.right}>
            <Input
              value={name}
              style={styles.textStyle2}
              editable={edit}
              onChangeText={(text) => setName(text)}
              maxLength={30}
              placeholder="Enter Name"
              inputContainerStyle={{ borderBottomWidth: input_border }}
            />

            <Input
              value={email}
              style={styles.textStyle2}
              editable={edit}
              onChangeText={(text) => setEmail(text)}
              maxLength={30}
              placeholder="Enter Email"
              inputContainerStyle={{ borderBottomWidth: input_border }}
            />
            <Input
              value={mobile}
              style={styles.textStyle2}
              editable={edit}

              maxLength={10}
              keyboardType={'number-pad'}
              placeholder="Enter Mobile"
              inputContainerStyle={{ borderBottomWidth: input_border }}

            />

            <Input
              value={address}
              style={styles.textStyle2}
              editable={edit}
              onChangeText={(text) => setAddress(text)}
              maxLength={30}
              placeholder="Enter Address"
              inputContainerStyle={{ borderBottomWidth: input_border }}
            />


          </View>
        </View>
        <View style={styles.editButtonView}>
          <TouchableOpacity
            style={{ flexDirection: 'row', padding: 5 }}
            onPress={editHandler}>
            <Icon
              name="pencil"
              size={20}
              color="white"
              style={{ marginHorizontal: 10 }}
            />
            <Text style={(styles.textStyle, { color: 'white' })}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', padding: 5 }}
            onPress={saveHandler}>
            <Icon
              name="save"
              size={20}
              color="white"
              style={{ marginHorizontal: 10 }}
            />
            <Text style={(styles.textStyle, { color: 'white' })}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 130 }}></View>
      </ScrollView>

    </View>


  );
};

const styles = StyleSheet.create({
  IndexView: {
    height: height + 5,

    // width:width,
  },
  backgroundImage: {
    width: '100%',
    height: height + 5
  },
  View2: {
    flex: 1,
    padding: 7,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: '100%',

  },

  profilePicView: {
    borderWidth: 1,
    borderColor: '#ac2c86',
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.7)',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  editButtonView: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 20,
    padding: 10,
  },
  textStyle: {
    color: 'gray',
    fontSize: 14,
    textTransform: 'uppercase',
    padding: 11,
    marginVertical: 7,
  },
  textStyle2: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 2,
    margin: -10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginEnd: 0.1,
    justifyContent: 'center',
    padding: 10,
  },
  userDetailsView: {
    flexDirection: 'row',
    marginVertical: 10,

  },
  left: {
    flex: 1.3,
    backgroundColor: '#e4dbe3',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 5
  },
  right: {
    flex: 1.7,
    paddingVertical: 15,
    backgroundColor: '#e4dbe3',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  Banner: {
    height: 60,
    width: width,
    resizeMode: 'stretch',
  },

});
