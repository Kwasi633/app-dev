import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';


function LoginScreen() {

    const [levelOfStudy, setLevelOfStudy] = useState('Highschool');
    const [interestedTopics, setInterestedTopics] = useState('English');

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
    
       <View style={styles.subContainer}>
           <Text style={styles.welcome}>Getting Started</Text>
       </View>
    
        <View style={styles.subContainerB}>
          <View style={styles.innerContainer}> 
          
          
          <View style={styles.inputContainer}>
                     
                <Picker
                style={styles.input}
                selectedValue={levelOfStudy}
                onValueChange={(itemValue) => setLevelOfStudy(itemValue)}
                >
              
              <Picker.Item label="High School" value="High School" />
              <Picker.Item label="College" value="College" />
              <Picker.Item label="University" value="University" />
                </Picker>
           </View>
         
            <View style={styles.inputContainer}>
            
            <Picker 
            style={styles.input}
            selectedValue={interestedTopics}
            onValueChange={(itemValue) => setInterestedTopics(itemValue)}
            >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Mathematics" value="Mathematics" />
            <Picker.Item label="Science" value="Science" />
            </Picker>
              
            
            </View>
            
           </View>
        </View>
        <View>
             <TouchableOpacity 
        onPress={() => 
        navigation.navigate('Signup')} 
        style = {styles.customLogIn}>
          <Text style={styles.text}>NEXT</Text>
        </TouchableOpacity>
        </View>
    </View>
    




);

}

const styles = StyleSheet.create({
     
     container: {
    flex: 1,
    alignItems: 'center', 
    //justifyContent: 'center'
  },
    
    subContainer:{
        backgroundColor: 'white',
        height: 120,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 55,
        borderTopWidth: 0, 
        padding: 20,
        paddingTop: 30,
     },

      welcome: {
      color: 'black',
      fontSize: 45,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    
    subContainerB:{
        backgroundColor: 'white',
        height: 400,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center', 
       // justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 55,
        borderTopWidth: 0, 
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        marginTop: 40,
        paddingBottom: 40,
        //flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35, 
     },
 
      inputContainer: {
      padding: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      marginLeft: 20,
      marginRight: 20, 
      marginTop: 30,
      width: '100%',  
      height: 50,
      justifyContent: 'space-around'
    },

    input: {
    flex: 1,
    height: 40,
    //margin: 10
    //backgroundColor: 'green'
  },

  innerContainer: {
    marginTop: 70,
    height: '50%',
    justifyContent: 'center'
    //width: 300
  },

  subtitle: { 
      color: 'black',
       fontSize: 16,
       textAlign: 'center',
      width: 20,
      marginBottom: 0,
      //fontWeight: 'bold',
    },

    customLogIn: {
    backgroundColor: '#3C4142',
    borderRadius: 10,
    padding: 8,
    width: '50%',
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',  
    height: 40,
    },

    text: {
    color: '#0bdc9f',
    fontSize: 11,
    fontWeight: 'bold',
    padding: 5,

  },

})

export default LoginScreen;