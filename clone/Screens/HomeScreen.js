import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    // navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('../img/logo.png')} />
        <TouchableOpacity onPress={handleSearchPress} style={styles.castIcon}>
          <MaterialIcons name="cast" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchPress} style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.tvShowsButton}>
          <Text style={styles.tvShowsText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moviesButton}>
          <Text style={styles.moviesText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moviesButton}>
          <Text style={styles.moviesText}>Categories</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style = {{ color : 'white',marginTop : 15,fontSize : 22,fontWeight : 'bold'}}>Your Next Watch</Text>
        <Image style={styles.image} source={require('../img/ao.jpeg')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  searchIcon: {
    marginLeft: 40,
  },
  castIcon: {
    marginLeft: 170,
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 10, 
  },
  tvShowsButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10, 
  },
  moviesButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10
  },
  CategoriesButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10, 
  },
  tvShowsText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  moviesText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
