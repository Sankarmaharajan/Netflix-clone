import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert ,StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    navigation.navigate('Home');
  };
    // try {
    //   const response = await fetch('http://10.0.2.2:8080/jobseeker/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const responseData = await response.text();
    //   console.log(responseData);
      
    //   if (response.ok) {
    //     navigation.navigate('Welcome');
    //   } else {
    //     Alert.alert('Login Failed', 'Invalid email or password');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   Alert.alert('Login Error', 'An error occurred while logging in');
    // }
  //};

  return (
    <View style = {style.container}>
      <View style={style.logoContainer}>
          <Image style={style.image} source={require('../img/landscape.png')} />
        </View>
      <View>
        <View style = {style.textbox}>
          <TextInput
          style={style.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
        style={style.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity  style = {style.button} onPress={handleLogin}>
          <Text style = {style.text}>Sign in</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text style = {{color: 'white',textAlign : 'center',fontWeight : 'bold'}}>OR</Text>
        <Text></Text>
        <TouchableOpacity  style = {style.input2}>
          <Text style = {style.text}>Use a sign-in code</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity >
          <Text style = {{color : 'lightgrey',
      textAlign : 'center',
      fontSize : 20}}>Forgot password?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity>
          <Text style = {{color : 'lightgrey',
      textAlign : 'center',
      fontSize : 20}}>New to Netflix? Sign up now</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black'
  },
  button :{
    borderColor : 'red'
  },
  image: {
    height: 100,
    width: 100,
  },
    input: {
      height: 60,
      width: '100%',
      backgroundColor: 'gray',
      paddingHorizontal: 15,
      marginBottom: 10,
      borderRadius: 5,
      color: 'white',
      borderWidth: 1,
    },
    input2:
    {
      height: 40,
      width: '100%',
      backgroundColor: 'gray',
      paddingHorizontal: 15,
      marginBottom: 10,
      borderRadius: 5,
      color: 'white',
      borderWidth: 1,
    },
    textbox:
    {
      paddingTop : 90
    },
    button: {
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      borderColor: 'white',
      borderWidth: 1,
      alignItems: 'center',
      marginTop: 10,
    },
    text:
    {
      color : 'white',
      textAlign : 'center',
      fontWeight: 'bold',
      fontSize : 20
    }
}
)