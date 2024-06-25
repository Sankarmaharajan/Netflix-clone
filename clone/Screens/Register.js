import { StatusBar } from "expo-status-bar";
import { Text , TextInput,ScrollView,View,StyleSheet ,Button , Alert,Image,TouchableOpacity} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { fetch } from 'react-native';


export default function Register() {
  const navigation = useNavigation();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleButton() {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Username and password are required.");
      return;
    }
  
    // Prepare the data to send
    const userData = {
      username: username,
      password: password,
    };
  
    // Send a POST request to the backend
    fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (response.ok) {
        // If registration is successful, navigate to login screen
        navigation.navigate('Login');
      } else {
        // If registration fails, show an error alert
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    });
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../img/landscape2.png")}
          />
        </View>
        <View style={styles.topRightContainer}>
          <TouchableOpacity style={styles.topBarButton}>
            <Text style={styles.buttonText}>HELP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarButton}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style = {{ marginLeft : 20,fontSize : 24,fontWeight : 'bold'}}>Unlimited films, TV</Text>
        <Text style = {{ marginLeft : 20,fontSize : 24,fontWeight : 'bold'}}>programmes & more </Text>
        <Text style = {{ marginLeft : 20,fontSize : 20}}>As a member, you can watch</Text>
        <Text style = {{ marginLeft : 20,fontSize : 20}}>exclusive TV programmes and films</Text>
        <Text style = {{ marginLeft : 20,fontSize : 20}}>on the mobile app and all your</Text>
        <Text style = {{ marginLeft : 20,fontSize : 20}}>other devices</Text>
        <Text></Text>
      </View>
      <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
        style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={{color: "white",
    fontSize: 16,
    textAlign: "center"}}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    input: {
      height: 40,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      color: 'black', 
      borderWidth: 1,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      marginTop: 10,
    },
    logoContainer: {},
    image: {
      height: 100,
      width: 150,
    },
    topRightContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    topBarButton: {
      marginLeft: 10,
    },
    button: {
      backgroundColor: "red",
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 20,
      marginTop: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
    },
  });
  
  /*
jaibhim , rebel moon, thalapathy, nayagan,KGF,  pirates of carribean , 83, ante sundarangi, wednesday
  */