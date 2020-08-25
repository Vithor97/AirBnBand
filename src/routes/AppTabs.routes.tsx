import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Pesquisa from '../pages/Pesquisa';
import Configuracao from '../pages/Configuracao';
import Landing from '../pages/Landing';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs(){
    return (
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height:64
            },
            tabStyle: {
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }}>
            <Screen name="Home" component={Landing}/>
            <Screen name="Pesquisa" component={Pesquisa}/>
            <Screen name="Configuracao" component={Configuracao}/>
        </Navigator>

    )
}

export default AppTabs;