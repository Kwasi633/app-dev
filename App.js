// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import LoginScreen from './src/selectLevel';
import SignupScreen from './src/questions';
import CheckingAnswers from './src/Answers';
import LoadScreen from './src/loadingScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerTitle: '',
          }}
        />
         <Stack.Screen name="Login" component={LoginScreen}
          options={{
            headerTitle: '',
          }}
         />
         <Stack.Screen name="Signup" component={SignupScreen} 
          options={{
            headerTitle: '',
          }}
         />
         <Stack.Screen name="Answers" component={CheckingAnswers} 
          options={{
            headerTitle: '',
          }}
         />
          <Stack.Screen name="LoadingScreen" component={LoadScreen} />

         </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;