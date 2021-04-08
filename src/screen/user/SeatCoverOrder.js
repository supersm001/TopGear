import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import {Text} from 'react-native-elements';
import {} from 'react-native-gesture-handler';

import {ImageBackground} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 65;

export const SeatCoverOrder = ({navigation}) => {
  return (
    <View style={styles.IndexView}>
      <ImageBackground
        source={require('../../../asstes/images/topgearbg.jpg')}
        style={styles.image}>
        <View
          style={{
            flex: 1,
            width: width,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textStyle}>Seat Cover Order page</Text>
        </View>
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
});
