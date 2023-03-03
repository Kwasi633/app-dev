import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function CheckingAnswers() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerB}>
        <Text style={styles.welcome}>Based on your choice of answers, a computer engineering 
        programme will be appropriate to pursue.</Text>
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

        welcome: {
      color: '#0bdc9f',
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'normal',
      alignContent: 'center',
      padding: 10
    },



 })





export default CheckingAnswers;