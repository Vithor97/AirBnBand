import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import AppTabs from './AppTabs.routes'

import AuthContext from "../contexts/auth";
import AppTabsArtista from './AppTabsArtist.routes';

const { Navigator, Screen } = createStackNavigator();

function AppRoute(){

    const { tipoUsuario } = useContext(AuthContext)

    return (
        
        <Navigator screenOptions={{headerShown: false}}>
            {console.log(tipoUsuario)}
            {
            tipoUsuario == "Contratante" ? 
            <Screen name="Tabs" component={AppTabs}/> : 
            <Screen name="Tabs" component={AppTabsArtista}/> 
            }
            
        </Navigator>

    )
}

export default AppRoute;