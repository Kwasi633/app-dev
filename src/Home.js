import React from 'react';
import { View, Button, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground
        source={require('./assets/rfid-chip.jpg')}
        style={styles.backgroundImage}
        //resizeMode="cover"
      >
      
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/daila-1.png')}
            style={styles.logo}
          />
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.subtitle}>
            Your Dynamic Artificial Intelligence Learning App
          </Text>
        </View>
    </ImageBackground>
    </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Need an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[styles.signupText, styles.signupLink]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    //height: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 300
    //borderBottomWidth: 5
  },

  header: {
    flex: 1,
    width: '90%',
    height: '40%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 150,
    color: 'blue'
},
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    //height: 100,
  },
  welcome: {
    color: '#00FFFF',
    fontSize: 64,
    fontWeight: 'bold',
    //marginTop: 20,
  },
  subtitle: {
  color: 'white',
  fontSize: 16.5,
  //marginTop: 10,
  textAlign: 'center',
  alignSelf: 'center',
},

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black'
  },
});

export default HomeScreen;
