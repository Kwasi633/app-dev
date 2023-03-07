import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, ScrollView,  ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function SignupScreen() {

const questions = ['What math topics do you feel most confident in?',
 'What math topics do you struggle with the most?', 
 'What study habits or strategies have worked best for you in math?'];


const [questionIndex, setQuestionIndex] = useState(0);
const [answerInput, setAnswerInput] = useState('');
const [isLoading, setIsLoading] = useState(true);

const navigation = useNavigation();

 useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },);

    return () => clearTimeout(timer);
  }, []);

const handleAnswerSubmit = () => {
  if (questionIndex < questions.length - 1){
    setAnswerInput('');
    setQuestionIndex(questionIndex + 1);
  }
  else{
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    navigation.navigate('Answers');
  }, 4000);
  }
};

if (isLoading){
  return (
    <View style={styles.loadingContainer}>
        <Image source={require('./assets/Iconnn.png') }
           style={styles.logo} 
           resizeMode='contain'
           />
           <Text style={styles.subtitle}>Checking Answers...</Text>
    </View>
  );
}


  return (    
    <KeyboardAvoidingView>
    <ScrollView>
    
      <View style={styles.container}>
        <View style={styles.subContainerB}>
        <Text style={styles.welcome}>{questions[questionIndex]}</Text>
      </View>

        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.answerInput}
          placeholder="Enter Answer"
          value={answerInput}
          multiline={true}
          onChangeText={(text) => setAnswerInput(text)}
        />     
        <Button title='>>' onPress={handleAnswerSubmit} />
        </View>

      <View style={styles.cancelContainer}>
        <View style={styles.numContainer}> 
           <Text style={styles.xxx}>X</Text>
        </View>
      </View> 
        

    </View>
  </ScrollView> 
    </KeyboardAvoidingView>
    
     
    );
}

  const styles = StyleSheet.create({

    loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f6',
     blurRadius: 580,

  },

     keyboardAvoidingView: {
    flex: 1,
  },

     container: {
    flex: 1,
    alignItems: 'center', 
    //justifyContent: 'center'
  },

   subContainerB:{
        backgroundColor: 'white',
        height: 400,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        marginTop: 40,
        paddingBottom: 40,
        //flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35, 
        width: '93%'
     },

        numContainer:{
        height: 60,
        backgroundColor: '#3C4142',
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 55, 
        marginTop: 10, 
        width: 60
     },

     welcome: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'normal',
      alignContent: 'center',
      padding: 10
    },

     subtitle: { 
      color: 'white',
       fontSize: 16,
       textAlign: 'center',
       width: 250,
      marginBottom: 30,
      //fontWeight: 'bold',
    },

      inputContainer: {
      padding: 10,
      backgroundColor: 'white',
      marginTop: 70,
      flexDirection: 'row',
      borderRadius: 15,
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

    answerInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 5,
    flex: 1,
},

  result: {
color: 'green',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center',
},

      signupContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 80,
        alignSelf: 'center',
        backgroundColor: 'white',
        height: 100
  },

    logo: {
    width: 300,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,  
    marginBottom: 0,
    marginTop: 100,
  },

    background: {
      flex: 1,
  },

  cancelButton:{
    
  },

     subtitle: { 
      color: 'black',
       fontSize: 16,
       textAlign: 'center',
      width: 250,
      marginTop: 0,
      fontWeight: 'bold',
      marginBottom: 100
    },

    cancelContainer: {
      height: 89,
      //backgroundColor: 'white',
      marginTop: 13
    },

    xxx: {
      color: '#0bdc9f',
      fontSize: 25,
      //fontWeight: 'bold',
      padding: 2
    }




})
















export default SignupScreen;