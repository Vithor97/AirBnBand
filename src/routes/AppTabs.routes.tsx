import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../resources/values/colors.json';

import Pesquisa from '../pages/Pesquisa';
import Configuracao from '../pages/Configuracao';
import Landing from '../pages/Landing';
import { color } from 'react-native-reanimated';

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

function AppTabs(){
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
            // activeBackgroundColor: colors.primary,
            // showLabel: false,
        }}>
            <Screen name="Home" component={Landing}/>
            <Screen name="Pesquisa" component={Pesquisa}/>
            <Screen name="Configuracao" component={Configuracao}/>
        </Navigator>

    )
}

export default AppTabs;