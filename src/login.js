import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


function LoginScreen() {
    return (
    <View style={styles.subContainer}>
    
       <View>
           <Text>Getting Started</Text>
       </View>
    
    </View>
    
);























}

const styles = StyleSheet.create({
     subContainer:{
        backgroundColor: 'blue',
        //backgroundColor: "#3C4142",
        //padding: 100,
        height: 150,
        marginTop: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%'
     }

})

export default LoginScreen;