import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import GameScreen from './Game';
import NewHotScreen from './NewHot';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="NewHot" component={NewHotScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;
