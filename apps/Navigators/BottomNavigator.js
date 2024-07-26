import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home/Home';
import {colors} from '../Theme/colors';
import Cards from '../Screens/Others/Cards';
import Transfers from '../Screens/Transfers';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.grey, // Use a different color for inactive tabs
        tabBarShowLabel: true,
        tabBarAllowFontScaling: true,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          paddingBottom: Platform.OS === 'ios' ? 22 : 10,
          paddingTop: 10,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 20,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Octicons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo name="swap" color={color} size={size} />
          ),
          tabBarLabel: 'Transfers',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Octicons name={'credit-card'} color={color} size={size} />
          ),
          tabBarLabel: 'Cards',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
