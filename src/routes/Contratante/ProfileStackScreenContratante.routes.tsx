import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsProfileContratante from '../../pages/DetailsProfileContratante';
import Configuracao from '../../pages/Configuracao';
import Favoritos from '../../pages/Contratante/Favoritos'

const {Navigator, Screen} = createStackNavigator();

function ProfileStackScreenContratante(){
    return (
            <Navigator screenOptions={{headerShown: true}}>
                <Screen  options={{title: 'Perfil do usuário', headerStyle: {backgroundColor: '#FD9A0B'}}} name="DetailsProfileContratante" component={DetailsProfileContratante}/>
                <Screen options={{title: 'Editar Dados', headerStyle: {backgroundColor: '#FD9A0B'}}} name="Configuracao" component={Configuracao}/>
                <Screen options={{title: 'Favoritos', headerStyle: {backgroundColor: '#FD9A0B'}}} name="Favoritos" component={Favoritos}/>
            </Navigator>
    )
}

export default ProfileStackScreenContratante;