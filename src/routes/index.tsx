import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";
import AuthStack from './AuthStack.routes';
import AuthContext from "../contexts/auth";
import AppRoute from "./App.routes";

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  

  
  return signed ? <AppRoute/> : <AuthStack/>;
  

};

export default Routes;