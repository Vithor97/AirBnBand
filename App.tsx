import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landing from './src/pages/Landing'
import Signin from './src/pages/Signin'
import Signup from './src/pages/Signup';
import AuthStack from './src/routes/AuthStack.routes';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';


import {AuthProvider} from "./src/contexts/auth";

export default function App() {
  return (
    <>
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <AuthStack/> */}
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
