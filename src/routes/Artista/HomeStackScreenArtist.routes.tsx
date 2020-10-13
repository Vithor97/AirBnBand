import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeArtista from '../../pages/HomeArtista';
import DetailsProfile from '../../pages/DetailsProfile';

const {Navigator, Screen} = createStackNavigator();

function HomeStackScreenArtist(){
    return (
            <Navigator screenOptions={{headerShown: true}}>
                <Screen name="HomeArtista" component={HomeArtista}/>
                <Screen name="DetailsProfile" component={DetailsProfile}/>
            </Navigator>
    )
}

export default HomeStackScreenArtist;