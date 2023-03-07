import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function CheckingAnswers() {

return (
    <View style={styles.container}>
      <View style={styles.subContainerB}>

        <Text style={styles.welcome}>
        Based on your responses, it seems that you have a strong foundation in algebra and geometry, but you struggle with calculus and trigonometry.{"\n"}
Review Algebra: You can use Khan Academy's Algebra I and Algebra II courses to review important topics.{"\n"}
Practice Calculus:  You can start by reviewing the basics of derivatives and integrals using Khan Academy's Calculus I course. {"\n"}
Combine Algebra and Calculus: Khan Academy's Calculus II course covers topics such as limits, series, and sequences that require algebraic manipulation.{"\n"}
Seek Help When Needed: Online forums such as Reddit's r/math and math.stackexchange.com can also be great resources for getting answers to specific questions.{"\n"}
Remember to practice problems and repetition to solidify your understanding of the material.
        Good luck on your math journey!
        </Text>
      </View>

    </View>
  );
}


 const styles = StyleSheet.create({
      container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
  },

  subContainerB:{
        backgroundColor: '#3C4142',
        height: 640,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center', 
        //justifyContent: 'center',
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
        marginTop: 10,
        paddingBottom: 40,
        //flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35, 
        width: '93%'
     },

        welcome: {
      color: '#0bdc9f',
      fontSize: 16.5,
      fontWeight: 'bold',
      fontStyle: 'normal',
      alignContent: 'center',
      padding: 10
    },

    logo: {
      width: 150,
      height: 200,
      marginBottom: 0,
      
    },

       subtitle: { 
      color: 'white',
       fontSize: 16,
       textAlign: 'center',
      width: 250,
      marginBottom: 30,
      //fontWeight: 'bold',
    },

 })





export default CheckingAnswers;