import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Landing from './src/pages/Landing'
import Signin from './src/pages/Signin'
import Signup from './src/pages/Signup';
import AuthStack from './src/routes/AuthStack.routes';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

import * as firebase from 'firebase'


import {AuthProvider} from "./src/contexts/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyCIFq1PsVGNAjUL-yOe5Wh6SjIt_CBsT4k",
//   authDomain: "airbnband-256a5.firebaseapp.com",
//   databaseURL: "https://airbnband-256a5.firebaseio.com",
//   projectId: "airbnband-256a5",
//   storageBucket: "airbnband-256a5.appspot.com",
//   messagingSenderId: "779337808433",
//   appId: "1:779337808433:web:0a5748522b4cfb47587310",
//   measurementId: "G-H45MHTMHYP"
// };
// // Initialize Firebase

// if(!firebase.apps.length){
//   //console.log("passou aqui ")
//   firebase.initializeApp(firebaseConfig);
//   firebase.auth().onAuthStateChanged((user)=>{
//     //console.log(user?.email)
//   })
// }

// firebase.auth().signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!').then((value)=>{
//   console.log(value.user)
// })

// firebase.auth()
// .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
// .then(() => {
//   console.log('User account created & signed in!');
// })
// .catch(error => {
//   if (error.code === 'auth/email-already-in-use') {
//     console.log('That email address is already in use!');
//   }

//   if (error.code === 'auth/invalid-email') {
//     console.log('That email address is invalid!');
//   }

//   console.error(error);
// });


//console.log(firebase)

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
