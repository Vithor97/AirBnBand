import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Favoritos from '../../pages/Contratante/Favoritos';
import DetailsProfile from '../../pages/DetailsProfile';

const {Navigator, Screen} = createStackNavigator();

function FavoriteStackScreenContratante(){
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen options={{headerShown: true , title: "Favoritos", headerStyle: {backgroundColor: '#FD9A0B'}}} name="Favoritos" component={Favoritos}/>
                <Screen options={{headerShown: false , title: "Perfil banda"}} name="DetralhesPerfil" component={DetailsProfile}/>
            </Navigator>
    )
}
export default FavoriteStackScreenContratante;