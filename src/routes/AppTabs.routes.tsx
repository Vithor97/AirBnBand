import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../resources/values/colors.json';

import Pesquisa from '../pages/Pesquisa';
import Configuracao from '../pages/Configuracao';
import Landing from '../pages/Landing';
import DetailsProfile from '../pages/DetailsProfile';

import DetailsProfileContratante from '../pages/DetailsProfileContratante';

import ProfileContratante from './Contratante/ProfileStackScreenContratante.routes'

import HomeStackScreenContratante from './Contratante/HomeStackScreenContratante.routes'

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

function AppTabs(){
    return (
        <Navigator tabBarOptions={{
            style: {
                
                elevation: 0,
                shadowOpacity: 0,
                height: 60,       
            },
            tabStyle: {
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            activeTintColor: colors.primary,
            inactiveTintColor: colors.black,
            keyboardHidesTabBar: true
            // activeBackgroundColor: colors.primary,
            // showLabel: false,
        }}>
            <Screen name="Home" component={HomeStackScreenContratante}/>
            <Screen name="Pesquisa" component={Pesquisa}/>
            <Screen name="Perfil" component={ProfileContratante}/>
            {/* <Screen name="DetralhesPerfil" component={DetailsProfile}/> */}

            {/* <Screen name="Configuracao" component={Configuracao}/> */}
        </Navigator>

    )
}

export default AppTabs;