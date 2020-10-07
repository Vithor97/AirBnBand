import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import strings from '../../resources/values/strings.json';

import AuthContext from '../../contexts/auth';

import DefaultButton from '../../components/defaultButton';

function Configuracao(){
    const { signOut, user, usuario } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Pagina de Configuração</Text>

            <DefaultButton text={strings.signOut} doIt={handleSignOut}/>
        </View>
    )
}

export default Configuracao;