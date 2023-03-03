import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SignupScreen() {
  return (    
    <View style={styles.subContainerB}>
      <Text style={styles.welcome}>Welcome</Text>
    </View>
  );
}







  const styles = StyleSheet.create({
     
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
        paddingTop: 0,
        marginTop: 40,
        paddingBottom: 40,
        //flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35, 
     },

     welcome: {
      color: '#0bdc9f',
      fontSize: 16,
      fontWeight: 'bold',
      fontStyle: 'normal',
      alignContent: 'center'
    },


})
















export default SignupScreen;