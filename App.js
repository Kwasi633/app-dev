// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import LoginScreen from './src/login';
import SignupScreen from './src/signup';
import checkingAnswers from './src/Answers';
import CheckingAnswers from './src/Answers';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Signup" component={SignupScreen} />
         <Stack.Screen name="Answers" component={CheckingAnswers} />
         </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;