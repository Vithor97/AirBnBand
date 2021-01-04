import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../../pages/Landing';
import DetailsProfile from '../../pages/DetailsProfile';
import Chat from '../../pages/Chat';

const {Navigator, Screen} = createStackNavigator();

function HomeStackScreenContratante(){
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Home" component={Landing}/>
                <Screen options={{headerShown: false , title: "Perfil banda"}} name="DetralhesPerfil" component={DetailsProfile}/>
                <Screen options={{headerShown: true , title: "Chat"}} name="Chat" component={Chat}/>
            </Navigator>
    )
}
export default HomeStackScreenContratante;