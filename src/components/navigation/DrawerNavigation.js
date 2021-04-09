import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Home } from '../../screen/user/Home';
import { SeatCoverOrder } from '../../screen/user/SeatCoverOrder';
import { SeatCoverBulkOrder } from '../../screen/user/SeatCoverBulkOrder';
import { D4MatOrder } from '../../screen/user/4DMatOrder';
import { D4MatBulkOrder } from '../../screen/user/4DMatBulkOrder';
import { AccessoriesOrder } from '../../screen/user/AccessoriesOrder';
import { OrdersSeatCover } from '../../screen/user/OrdersSeatCover';
import { Orders4DMat } from '../../screen/user/Orders4DMat';
import { OrdersAccessories } from '../../screen/user/OrdersAccessories';

import { Profile } from '../../screen/user/Profile';
import { Authcontext } from '../../components/navigation/context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Collapsible from 'react-native-collapsible';

const height = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const DrawerNavigation = () => {
  const { signOut } = useContext(Authcontext);

  const HomeScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Home',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },

            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const SeatCoverOrderScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SeatCoverOrder"
          component={SeatCoverOrder}
          options={{
            headerTitle: 'Seat Cover Order',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const SeatCoverBulkOrderScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SeatCoverBulkOrder"
          component={SeatCoverBulkOrder}
          options={{
            headerTitle: 'Seat Cover Bulk Order',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const D4MatOrderScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="4DMatOrder"
          component={D4MatOrder}
          options={{
            headerTitle: '4D Mat Order',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const D4MatBulkOrderScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="4DMatBulkOrder"
          component={D4MatBulkOrder}
          options={{
            headerTitle: '4D Mat Bulk Order',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const AccessoriesOrderScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AccessoriesOrder"
          component={AccessoriesOrder}
          options={{
            headerTitle: 'Accessories Order',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const OrdersSeatCoverScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="OrdersSeatCover"
          component={OrdersSeatCover}
          options={{
            headerTitle: 'View Seat Cover Orders',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const Orders4DMatScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Orders4DMat"
          component={Orders4DMat}
          options={{
            headerTitle: 'View 4D Mat Orders',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const OrdersAccessoriesScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="OrdersAccessories"
          component={OrdersAccessories}
          options={{
            headerTitle: 'View Accessories Orders',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const ProfileScreen = props => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: 'Profile',
            headerStyle: { height: 40, backgroundColor: '#7b1fa2' },
            headerTitleStyle: { fontSize: 15, color: 'white' },
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5
                  name="bars"
                  onPress={() => props.navigation.openDrawer()}
                  style={styles.HeaderBars}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  const CustomDrawerNavigator = props => {
    const [name, setName] = useState('Name');
    const [isSeatCoverCollapsed, setIsSeatCoverCollapsed] = useState(true);
    const [is4dmatCollapsed, setIs4dmatCollapsed] = useState(true);
    const [isAccessoriesCollapsed, setIsAccessoriesCollapsed] = useState(true);
    const [isOrdersCollapsed, setIsOrdersCollapsed] = useState(true);
    const toggelSetCover = () => {
      if (isSeatCoverCollapsed) setIsSeatCoverCollapsed(false);
      else setIsSeatCoverCollapsed(true);
    };
    const toggel4dmat = () => {
      if (is4dmatCollapsed) setIs4dmatCollapsed(false);
      else setIs4dmatCollapsed(true);
    };
    const toggelAccessories = () => {
      if (isAccessoriesCollapsed) setIsAccessoriesCollapsed(false);
      else setIsAccessoriesCollapsed(true);
    };
    const toggelOrders = () => {
      if (isOrdersCollapsed) setIsOrdersCollapsed(false);
      else setIsOrdersCollapsed(true);
    };
    useEffect(() => {

      getdata();



    }, [props])
    async function getdata() {
      try {
        const Name = await AsyncStorage.getItem('name');
        //   console.log(Name);
        setName(Name);
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <View
        style={{
          paddingTop: 10,
          width: '100%',
          height: height - 30,
          backgroundColor: '#7b1fa2',
        }}>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <View style={styles.ImageProfileView}>
            <Image
              source={require('../../../asstes/images/userLogo.png')}
              style={styles.UserProfileImage}
            />
          </View>
          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text
              style={{
                textTransform: 'capitalize',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {name}
            </Text>

            <Text
              numberOfLines={1}
              style={{
                textTransform: 'capitalize',
                fontSize: 15,
                width: 200,
                color: 'white',
                fontWeight: 'bold',
              }}>
              ₹ 250
            </Text>
          </View>
        </View>

        <ScrollView
          style={{
            marginTop: 20,
            width: '100%',
            backgroundColor: '#e4dbe3',
            padding: 1,
            height: height - height * 0.2,
            overflow: 'scroll',
          }}>
          <ScrollView>
            <View>
              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5 name="home" style={styles.MenuIcon} /> Home
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>

              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  // props.navigation.navigate('SeatCover');
                  toggelSetCover();
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5 name="couch" style={styles.MenuIcon} /> Seat
                    Cover
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>

              <Collapsible collapsed={isSeatCoverCollapsed}>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsSeatCoverCollapsed(true);
                    props.navigation.navigate('SeatCoverOrder');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="box" style={styles.MenuIcon} /> Order
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsSeatCoverCollapsed(true);
                    props.navigation.navigate('SeatCoverBulkOrder');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="boxes" style={styles.MenuIcon} /> Bulk
                      Order
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </Collapsible>

              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  // props.navigation.navigate('4DMat');
                  toggel4dmat();
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5 name="chess-board" style={styles.MenuIcon} />{' '}
                    4D Mat
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>

              <Collapsible collapsed={is4dmatCollapsed}>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIs4dmatCollapsed(true);
                    props.navigation.navigate('4DMatOrder');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="box" style={styles.MenuIcon} /> Order
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIs4dmatCollapsed(true);
                    props.navigation.navigate('4DMatBulkOrder');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="boxes" style={styles.MenuIcon} /> Bulk
                      Order
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </Collapsible>
              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  // props.navigation.navigate('Accessories');
                  toggelAccessories();
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5 name="braille" style={styles.MenuIcon} />{' '}
                    Accessories
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              <Collapsible collapsed={isAccessoriesCollapsed}>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsAccessoriesCollapsed(true);
                    props.navigation.navigate('AccessoriesOrder');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="box" style={styles.MenuIcon} /> Order
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </Collapsible>

              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  // props.navigation.navigate('SeatCover');
                  toggelOrders();
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5
                      name="shopping-cart"
                      style={styles.MenuIcon}
                    />{' '}
                    Orders
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>

              <Collapsible collapsed={isOrdersCollapsed}>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsOrdersCollapsed(true);
                    props.navigation.navigate('OrdersSeatCover');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="couch" style={styles.MenuIcon} /> Seat
                      Covers
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsOrdersCollapsed(true);
                    props.navigation.navigate('Orders4DMat');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5
                        name="chess-board"
                        style={styles.MenuIcon}
                      />{' '}
                      4D Mats
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
                <ListItem
                  containerStyle={styles.SubListItemContainer}
                  onPress={() => {
                    setIsOrdersCollapsed(true);
                    props.navigation.navigate('OrdersAccessories');
                  }}>
                  <ListItem.Content>
                    <ListItem.Title style={styles.SubListItems}>
                      <FontAwesome5 name="braille" style={styles.MenuIcon} />{' '}
                      Accessories
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </Collapsible>
              <ListItem
                containerStyle={styles.ListItemContainer}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}>
                <ListItem.Content>
                  <ListItem.Title style={styles.ListItems}>
                    <FontAwesome5 name="user-alt" style={styles.MenuIcon} />{' '}
                    PROFILE
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>

            {/* <View style={{width:'100%', position:'absolute', bottom:0}}> */}
            <View>
              <ListItem
                topDivider
                bottomDivider
                containerStyle={styles.ListItemLogoutContainer}
                onPress={() => {
                  signOut();
                }}>
                <ListItem.Content>
                  <ListItem.Title style={[styles.ListItems, { color: 'white' }]}>
                    <FontAwesome5
                      name="sign-out-alt"
                      style={[styles.MenuIcon, { color: 'white' }]}
                    />{' '}
                    Sign Out
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron iconStyle={{ color: 'white' }} />
              </ListItem>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4a0072" />

      <Drawer.Navigator
        drawerStyle={{ width: '75%' }}
        drawerContent={props => <CustomDrawerNavigator {...props} />}
        edgeWidth={30}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SeatCoverOrder" component={SeatCoverOrderScreen} />
        <Drawer.Screen
          name="SeatCoverBulkOrder"
          component={SeatCoverBulkOrderScreen}
        />
        <Drawer.Screen name="4DMatOrder" component={D4MatOrderScreen} />
        <Drawer.Screen name="4DMatBulkOrder" component={D4MatBulkOrderScreen} />
        <Drawer.Screen
          name="AccessoriesOrder"
          component={AccessoriesOrderScreen}
        />
        <Drawer.Screen
          name="OrdersSeatCover"
          component={OrdersSeatCoverScreen}
        />
        <Drawer.Screen name="Orders4DMat" component={Orders4DMatScreen} />
        <Drawer.Screen
          name="OrdersAccessories"
          component={OrdersAccessoriesScreen}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  HeaderBars: {
    color: 'white',
    fontSize: 25,
    marginRight: 10,
  },
  ListItems: {
    fontSize: 15,
    color: 'gray',
    textTransform: 'capitalize',
  },
  SubListItems: {
    fontSize: 15,
    color: 'gray',
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  MenuIcon: {
    color: '#af8eb5',
    fontSize: 14,
  },
  ImageProfileView: {
    height: 80,
    width: 80,
    overflow: 'hidden',
  },
  UserProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderColor: 'lightgray',
    borderWidth: 2,
  },
  ListItemContainer: {
    padding: 12,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  SubListItemContainer: {
    padding: 12,
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: '#f3e5f5',
  },
  ListItemLogoutContainer: {
    backgroundColor: 'rgba(100,100,100,0.5)',
    padding: 10,
  },
  CustomMenu: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
    textTransform: 'capitalize',
    textAlign: 'left',
  },
});
