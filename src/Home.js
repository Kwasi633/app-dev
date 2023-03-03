import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   const navigation = useNavigation();

  return (

    <ScrollView>
    
    <View style={styles.container}>
         <View style={styles.subContainer}>
              <Image  source={require('./assets/daila-1.png')}
            style={styles.logo}
          />
                   <Text style={styles.welcome}>Welcome</Text>
                   <Text style={styles.subtitle}>
                       Your Dynamic AI Learning App
                  </Text>
              </View>
      
        <KeyboardAvoidingView>
        
        <View style={styles.inputContainer}>
          <Image source={require('./assets/download.png')}
           style={styles.icon}  />
      
              <TextInput
              style={styles.input}
              placeholder="Enter your name" 
              value={username}
              onChangeText={setUsername}
              />
            
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('./assets/passWord.png')} style={styles.icon} />
          
          <TextInput
              style={styles.input}
              placeholder="Enter your password" 
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              />
        </View>


        <TouchableOpacity onPress={() => navigation.navigate('passwordReset')}>
          <Text  style={styles.subtitleB}>
            Forgot Password?
        </Text>

        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => 
        navigation.navigate('Login')} 
        style = {styles.customLogIn}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
  
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Need an account? </Text>
                
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={[styles.signupText, styles.signupLink]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      </View>
  </ScrollView>
  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center', 
    //justifyContent: 'center'
  },

  subContainer:{
        backgroundColor: "#3C4142",
        //padding: 100,
        height: 280,
        marginTop: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%'
      },

     welcome: {
      color: '#0bdc9f',
      fontSize: 46,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },

      subtitle: { 
      color: 'white',
       fontSize: 16,
       textAlign: 'center',
      width: 250,
      marginBottom: 30,
      //fontWeight: 'bold',
    },

    logo: {
      width: 150,
      height: 200,
      marginBottom: 0,
      
    },

    inputContainer: {
      padding: 10,
      backgroundColor: 'white',
      marginTop: 30,
      flexDirection: 'row',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      marginLeft: 20,
      marginRight: 20,    
    },
    
    
    icon: {
    marginRight: 10,
    height: 15,
    width: 15
  },

  input: {
    flex: 1,
    height: 40,
  },

     subtitleB: { 
      color: 'black',
       fontSize: 10,
       textAlign: 'right',
      width: 100,
      marginTop: 10,
       fontWeight: 'bold',
       right: 25,
       position: 'absolute',
     },

      signupContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 80,
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

    customLogIn: {
    backgroundColor: '#3C4142',
    borderRadius: 10,
    padding: 8,
    width: '70%',
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',  
    height: 40,
    },
  
  text: {
    color: '#0bdc9f',
    fontSize: 15,
    fontWeight: 'bold'
  },




















































})




export default HomeScreen;