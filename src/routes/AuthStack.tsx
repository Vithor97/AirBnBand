import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin'
import Signup from '../pages/Signup'


const {Navigator, Screen} = createStackNavigator();

function AuthStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Signin" component={Signin}/>
                <Screen name="Signup" component={Signup}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AuthStack;