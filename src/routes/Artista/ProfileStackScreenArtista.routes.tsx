import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsProfileArtista from '../../pages/Artista/DetailsProfileArtista';
import EditPerfilArtista from '../../pages/Artista/EditPerfilArtista';

const {Navigator, Screen} = createStackNavigator();

function ProfileStackScreenArtista(){
    return (
            <Navigator screenOptions={{headerShown: true}}>
                <Screen options={{title: 'Perfil do usuário' ,headerStyle: {backgroundColor: '#FD9A0B'}}} name="DetailsProfileArtista" component={DetailsProfileArtista}/>
                <Screen options={{title: 'Editar Dados Artista',  headerStyle: {backgroundColor: '#FD9A0B'}}} name="EditPerfilArtista" component={EditPerfilArtista}/>
            </Navigator>
    )
}

export default ProfileStackScreenArtista;