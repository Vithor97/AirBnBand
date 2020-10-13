import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableHighlight} from 'react-native';

import strings from '../../resources/values/strings.json';

import { YellowBox } from 'react-native';

import { useNavigation } from '@react-navigation/native';

YellowBox.ignoreWarnings(['Setting a timer']);

import styles from './styles';
import AuthContext from '../../contexts/auth';
import { TextInput } from 'react-native-gesture-handler';

console.ignoredYellowBox = [
    'Setting a timer'
]



function HomeArtista () {
    const [useer, setUseer] = useState([]);
    const { signOut, user, usuario } = useContext(AuthContext);
    const {navigate} = useNavigation()

    function handleToDetails () {
        navigate('DetailsProfile')
        console.log("Botão handleToDetails está sendo clicado")
    }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Olá Fulano</Text>
        </View>
        <View style={styles.footer}>
            <Image 
                style={styles.avatar}
                source={{uri: "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538"}}
            />
            <View style={styles.infos}>
                <Text style={styles.NameBand}>Nome da Banda</Text>
                <Text style={styles.musicalStule}>Estilo musical</Text>
            </View>
            <Text style={styles.bio}>
                Somo uma banda de rock que atua desde 1800 e tocamos em varios bares
                ...............
                Somo uma banda de rock que atua desde 1800 e tocamos em varios bares
                ...............
                Somo uma banda de rock que atua desde 1800 e tocamos em varios bares
                ...............
            </Text>

            <TouchableHighlight onPress={handleToDetails} style={{backgroundColor: "#FD9A0B"}}>
                <Text>Botão que vai para tela de detalhes</Text>
            </TouchableHighlight>
            


        </View>
    </View>
    )
}

export default HomeArtista;