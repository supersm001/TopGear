import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { Text } from 'react-native-elements';
import { } from 'react-native-gesture-handler';

import { ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 65;
const Stack = createStackNavigator();

const SelectBrand = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Brand Page
          </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Model')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const SelectModel = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Model Page
  </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Series')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const SelectSeries = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Series Page
  </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Letherite')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const SelectLetherite = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Letherite Page
  </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Items')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const SelectItems = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Items Page
  </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Armrest')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const SelectArmrest = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View style={styles.Area}>
          <Text style={styles.textStyle}>
            Select Armrest Page
  </Text>
          <TouchableOpacity style={styles.ButtonStyle} onPress={() => navigation.navigate('Select Model')}>
            <LinearGradient colors={['#ae52d4', '#7b1fa2', '#4a0072']}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.5 }}>
              <Text style={{ color: 'white' }}>
                GO
                           </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};



export const SeatCoverOrder = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <Stack.Navigator initialRouteName='Select Brand'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Select Brand" component={SelectBrand} />
          <Stack.Screen name="Select Model" component={SelectModel} />
          <Stack.Screen name="Select Series" component={SelectSeries} />
          <Stack.Screen name="Select Letherite" component={SelectLetherite} />
          <Stack.Screen name="Select Items" component={SelectItems} />
          <Stack.Screen name="Select Armrest" component={SelectArmrest} />
        </Stack.Navigator>




      </ImageBackground>
    </View>
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
    resizeMode: 'cover',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  Area: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  ButtonStyle: {
    height: 40,
    width: '50%',
    borderRadius: 50,
    borderColor: 'white',
    //  borderWidth: 1,
  },

});
