import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";
import AuthStack from './AuthStack.routes';
import AuthContext from "../contexts/auth";
import AppRoute from "./App.routes";

import base from '../../firebase'

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);


  //const usuarioLogadoFirebase = base.auth().currentUser;
  

  
  // return usuarioLogadoFirebase ? <AppRoute/> : <AuthStack/>;
  return signed ? <AppRoute/> : <AuthStack/>;
  

};

export default Routes;