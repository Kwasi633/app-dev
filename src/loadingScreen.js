import React, { useEffect, useState, useRef } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

function LoadScreen() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);
 
  useEffect (() => {
    if (isFocused){
      setMounted(true);
    }
    
    return () => {
      setMounted(false);
      clearTimeout(timerRef.current);
    };
  },[isFocused]);

  useEffect (() => {
   
       if (mounted) {
      timerRef.current = setTimeout(() => {
        navigation.navigate('Home'); 
      }, 5000);
    }

    return () => clearTimeout(timerRef.current);
  }, [mounted, navigation]);

  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/daila-1.png')}
      style={styles.logo}
      />
    </View>
  );
}


const styles = StyleSheet.create({ 
   container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    //backgroundColor: '#e1e0dd'
    backgroundColor: '#7b7b7b'
  },

   logo: {
      width: '100%',
      height: '50%',
      marginBottom: 0,
      
    },


})


export default LoadScreen;