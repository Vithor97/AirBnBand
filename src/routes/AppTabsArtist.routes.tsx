import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../resources/values/colors.json';

import HomeStackScreenArtist from './Artista/HomeStackScreenArtist.routes'
import ConfigArtista from './Artista/ProfileStackScreenArtista.routes'
import ChatStackScreen from './ChatStackScreen.routes'

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

function AppTabsArtista(){
    return (
        <Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'HomeArtistaStack') {
                    iconName = focused
                    ? 'home'
                    : 'home';
                }
                else if (route.name === 'ConfigArtista') {
                    iconName = focused ? 'user' : 'user';
                }
    
                else if (route.name === 'ChatScreen') {
                    iconName = focused ? 'comments' : 'comments';
                }
                
                return <Icon name={iconName as string} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
            // style: {
            //     elevation: 0,
            //     shadowOpacity: 0,
            //     height:64,
            // },
            // tabStyle: {
            //     flexDirection:'row',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            // },
            activeTintColor: colors.primary,
            inactiveTintColor: colors.black,
            showLabel: false,
            keyboardHidesTabBar: true,

        }}>
            <Screen name="HomeArtistaStack" component={HomeStackScreenArtist}/>
            <Screen name="ChatScreen" component={ChatStackScreen}/>
            <Screen name="ConfigArtista" component={ConfigArtista}/>
        </Navigator>

    )
}

export default AppTabsArtista;