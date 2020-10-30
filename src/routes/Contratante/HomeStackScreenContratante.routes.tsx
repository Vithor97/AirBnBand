import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../../pages/Landing';
import DetailsProfile from '../../pages/DetailsProfile';

const {Navigator, Screen} = createStackNavigator();

function HomeStackScreenContratante(){
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Home" component={Landing}/>
                <Screen options={{headerShown: false , title: "Perfil banda"}} name="DetralhesPerfil" component={DetailsProfile}/>
            </Navigator>
    )
}
export default HomeStackScreenContratante;