import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../resources/values/colors.json';

import Configuracao from '../pages/Configuracao';
import HomeArtista from '../pages/HomeArtista';

import HomeStackScreenArtist from './Artista/HomeStackScreenArtist.routes'
import ConfigArtista from './Artista/ProfileStackScreenArtista.routes'

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

function AppTabsArtista(){
    return (
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height:64,
            },
            tabStyle: {
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            activeTintColor: colors.primary,
            inactiveTintColor: colors.black,

        }}>
            <Screen name="HomeArtistaStack" component={HomeStackScreenArtist}/>
            <Screen name="ConfigArtista" component={ConfigArtista}/>
        </Navigator>

    )
}

export default AppTabsArtista;