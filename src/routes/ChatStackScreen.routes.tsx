import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListChat from '../pages/Chat/ListChat';
import Chat from '../pages/Chat'


const {Navigator, Screen} = createStackNavigator();

function HomeStackScreenArtist(){
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="ListChat" options={{headerShown: true, title: "Lista de conversas", headerStyle: {backgroundColor: '#FD9A0B'}}} component={ListChat}/>
                <Screen name="Chat" options={({ route }: any) => ({ title: route.params.nome, headerShown: true })} component={Chat}/>
            </Navigator>
    )
}

export default HomeStackScreenArtist;