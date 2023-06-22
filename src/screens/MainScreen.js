import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Stock from './Stock';
import Property from './Property';
import Deposit from './Deposit';

const MainScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#336600' },
        tabBarActiveTintColor: '#87d37c',
        tabBarLabelStyle: { fontSize: 12},
        tabBarStyle: { 
          backgroundColor: 'white',
          height: 65,
        },
      }}
      >
      <Tab.Screen
        name="주식"
        component={Stock}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="line-chart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="부동산"
        component={Property}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="building" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="예적금"
        component={Deposit}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="won" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainScreen;
