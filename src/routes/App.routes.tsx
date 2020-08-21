import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

function AppRoute(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Landing" component={Landing}/>
        </Navigator>

    )
}

export default AppRoute;