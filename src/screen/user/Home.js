import React from 'react';
import {
  StyleSheet,

  View,

  Dimensions,

} from 'react-native';

import { Text } from 'react-native-elements';
import { } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import {
  LineChart

} from "react-native-chart-kit";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 65;


export const Home = ({ navigation }) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground source={require('../../../asstes/images/topgearbg.jpg')} style={styles.image}>
        <LinearGradient colors={['rgba(100,0,100,0.7)', 'rgba(100,0,100,0)	']} style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, width: width, alignItems: 'center', justifyContent: 'center' }}>

            <View style={styles.cartSec}>


              <LinearGradient colors={['#9575cd', '#000000']} style={styles.cartItem}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('SeatCover')}>
                  <Text style={styles.cartItemText}>
                    Seat Cover
            </Text>
                  <Text style={styles.cartItemValueText}>
                    8
               </Text>
                </TouchableOpacity>
              </LinearGradient>


              <LinearGradient colors={['#9575cd', '#000000']} style={styles.cartItem}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('4DMat')}>
                  <Text style={styles.cartItemText}>
                    4D Mat
            </Text>

                  <Text style={styles.cartItemValueText}>
                    10
               </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient colors={['#9575cd', '#000000']} style={styles.cartItem}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => navigation.navigate('Accessories')}>
                  <Text style={styles.cartItemText}>
                    Accessories
            </Text>

                  <Text style={styles.cartItemValueText}>
                    12
               </Text>
                </TouchableOpacity>
              </LinearGradient>








            </View>


            <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>Order Summary</Text>
            <View style={styles.OrdersSummary}>
              <LineChart
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width / 1.1} // from react-native
                height={Dimensions.get("window").height / 2}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#7b1fa2",
                  backgroundGradientFrom: "#12005e",
                  backgroundGradientTo: "#7b1fa2",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />

            </View>


          </View>
        </LinearGradient>
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
    resizeMode: "cover",

  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  cartSec: {
    flex: 4,
    //backgroundColor: 'rgba(0,0,100,0.1)',


    width: '95%',
    alignItems: 'center',

    justifyContent: 'space-evenly'
  },
  OrdersSummary: {
    flex: 6,
    backgroundColor: 'rgba(0,0,100,0.1)',


    width: '90%',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },

  cartItem: {
    flexDirection: 'row',
    // paddingVertical: 15,
    width: '100%',
    borderLeftColor: '#4e73df',
    borderLeftWidth: 4,
    borderTopColor: 'white',
    borderTopWidth: 1,
    borderRightColor: 'white',
    borderRightWidth: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 7,


  },
  cartItemText: {
    fontSize: 18,
    color: 'lightgray',
    paddingVertical: 15,
  },
  cartItemValueText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  }
});
