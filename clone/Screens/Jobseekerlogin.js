import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome'

const Jobseekerlogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/jobseeker/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Navigate to the Welcome page upon successful login
          navigation.navigate('Welcome');
        } else {
          Alert.alert('Invalid credentials', 'Please check your email and password');
        }
      } else {
        Alert.alert('Login Failed', 'An error occurred while logging in');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Error', 'An error occurred while logging in');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.triangle}></View>
      </View>
      <View style={styles.back}>
        <Text style={{ fontSize: 50, bottom: 120, color: 'maroon', fontWeight: '700' }}>Login</Text>
        <View style={styles.icon1}>
          <MaterialIcons name='alternate-email' style={styles.Iconname} />
          <TextInput
            placeholder="Username"
            style={{ flex: 1 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.icon2}>
          <Ionicons name='ios-lock-closed-outline' style={styles.Iconname} />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.forgottext}>Forget?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.otherlogin}>or, login with...</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      flex: 1,
      backgroundColor: 'blue',
      position: 'relative',
      width: '100%',
    },
    back: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 50,
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 200,
      borderRightWidth: 212,
      borderBottomWidth: 250,
      borderLeftColor: 'blue',
      borderRightColor: 'blue',
      borderBottomColor: 'white',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    icon1: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 25,
      borderBottomColor: 'gray',
      width: '80%',
    },
    icon2: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 25,
      borderBottomColor: 'gray',
      width: '80%',
    },
    Iconname: {
      fontSize: 20,
      marginRight: 5,
    },
    forgottext: {
      color: 'blue',
      fontWeight: '700',
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'purple',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      marginTop: 20,
    },
    buttontext: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
      color: 'white',
    },
    otherlogin: {
      marginTop: 20,
      textAlign: 'center',
      color: 'black',
      fontSize: 15,
    }
  });
  

export default Jobseekerlogin;