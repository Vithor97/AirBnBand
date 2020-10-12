import React, { useContext, useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native';

import Api from '../../services/api'

import strings from '../../resources/values/strings.json';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer']);

import styles from './styles';
import AuthContext from '../../contexts/auth';

console.ignoredYellowBox = [
    'Setting a timer'
]

function HomeArtista () {
    const [useer, setUseer] = useState([]);
    const { signOut, user, usuario } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{strings.app_name}</Text>

            <Text>
                Estou na página do artista
            </Text>
        </View>
    )
}

export default HomeArtista;