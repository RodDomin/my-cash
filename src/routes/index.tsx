import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import BottomTab from '../components/BottomTab'

import icons from './icons'

const Tab = createBottomTabNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = icons[route.name];

            return <BottomTab name={route.name} color={color} iconName={iconName} size={size} focused={focused} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#6b8e5d',
          showLabel: false,
          style: {
            backgroundColor: '#051100'
          },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen name="Categories" component={Profile} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
