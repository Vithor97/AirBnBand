import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../resources/values/colors.json';

import Pesquisa from '../pages/Pesquisa';

import ProfileContratante from './Contratante/ProfileStackScreenContratante.routes'

import HomeStackScreenContratante from './Contratante/HomeStackScreenContratante.routes'
import FavoriteStackScreenContratante from './Contratante/FavoriteStackScreenContratante.routes'
import ChatStackScreen from './ChatStackScreen.routes'

const { Navigator, Screen } = createBottomTabNavigator();

Icon.loadFont();

function AppTabs(){
    return (
        <Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Pesquisa') {
                iconName = focused ? 'search' : 'search';
              }
              else if (route.name === 'Favoritos') {
                iconName = focused ? 'heart' : 'heart';
              }

              else if (route.name === 'ChatScreen') {
                iconName = focused ? 'comments' : 'comments';
              }

              else if (route.name === 'Perfil') {
                iconName = focused ? 'user' : 'user';
              }
             
              
  
              // You can return any component that you like here!
              return <Icon name={iconName as string} size={35} color={color} />;
            },
          })}
        tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: colors.black,
            showLabel: false,
            keyboardHidesTabBar: true,
        }}
        >
            <Screen name="Home" component={HomeStackScreenContratante}/>
            <Screen name="Pesquisa" component={Pesquisa}/>
            <Screen name="Favoritos" component={FavoriteStackScreenContratante}/>
            <Screen name="ChatScreen" component={ChatStackScreen}/>
            <Screen name="Perfil" component={ProfileContratante}/>

            
        </Navigator>

    )
}

export default AppTabs;