import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ArtistSignUp from '../pages/CadastroArtista';
import HirerSignUp from '../pages/CadastroContratante';
import Landing from '../pages/Landing';

const {Navigator, Screen} = createStackNavigator();

function AuthStack(){
    return (
        // <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Signin" component={Signin}/>
                <Screen name="Signup" component={Signup}/>
                <Screen name="ArtistSignUp" component={ArtistSignUp}/>
                <Screen name="HirerSignUp" component={HirerSignUp}/>
                {/* <Screen name="Landing" component={Landing}/> */}
            </Navigator>
        // </NavigationContainer>
    )
}

export default AuthStack;