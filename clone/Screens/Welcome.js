import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image style={styles.image} source={require('../img/logo.png')} />
        </View>
        <View style={styles.topRightContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>PRIVACY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={styles.text}>Unlimited</Text>
      <Text style={styles.text}>entertainment,</Text>
      <Text style={styles.text}>one low price</Text>
      <Text style={styles.text2}>Everything on Netflix, starting at</Text>
      <Text style={styles.text2}>just Rs.149.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logoContainer: {},
  image: {
    height: 100,
    width: 70,
  },
  topRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  text:{
    color:'white',
    fontSize : 30
  },
  text2:{
    color:'white',
    fontSize : 24
  }
});
