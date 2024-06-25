import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Screens/Welcome';
import Register from './Screens/Register';
import Login from './Screens/Login'
import Jobseekerlogin from './Screens/Jobseekerlogin';
import Employerlogin from './Screens/Employerlogin';
import Adminlogin from './Screens/Adminlogin'
import JobseekerRegister from './Screens/JobseekerRegister';
import Home from './Screens/Home';
import Game from './Screens/Game';
import NewHot from './Screens/NewHot';
import Profile from './Screens/Profile'
 
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
           <Stack.Navigator initialRouteName='Welcome'>
           <Stack.Screen name='Welcome' component={Welcome} />
           <Stack.Screen name='Register' component={Register} />
           <Stack.Screen name = 'Login' component = {Login} />
           <Stack.Screen name = 'Jobseekerlogin' component={Jobseekerlogin} />
           <Stack.Screen name = 'Employerlogin' component={Employerlogin} />
           <Stack.Screen name = 'Adminlogin' component={Adminlogin} />
           <Stack.Screen name = 'JobseekerRegister' component = {JobseekerRegister} />
           <Stack.Screen name = 'Home' component = {Home} />
           <Stack.Screen name = 'Game' component = {Game} />
           <Stack.Screen name = 'NewHot' component = {NewHot} />
           <Stack.Screen name = 'Profile' component = {Profile} />
         </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
