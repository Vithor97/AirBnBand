import React, { useContext, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import { YellowBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
YellowBox.ignoreWarnings(['Setting a timer']);

import styles from './styles';
import AuthContext from '../../contexts/auth';


console.ignoredYellowBox = [
    'Setting a timer'
]

function HomeArtista () {
    const { usuario } = useContext(AuthContext);
    const {navigate} = useNavigation()

    const dadosUsuario: any = usuario

    // function handleToDetails () {
    //     navigate('DetailsProfile')
    //     console.log("Botão handleToDetails está sendo clicado")
    // }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Olá, {dadosUsuario.nome}</Text>
            </View>

            <View style={styles.footer}>
                <Image 
                    style={styles.avatar}
                    source={{uri: dadosUsuario.avatar}}
                />

                <View style={styles.centralizedInfoContainer}>
                    <Text style={styles.bandNameStyle}>{dadosUsuario.nomeArtistico}</Text>

                    <Text style={styles.musicalStyleStyle}>{dadosUsuario.estiloMusical}</Text>
                </View>

                <ScrollView>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoLabel}>Instagram: </Text>

                        <Text style={styles.infoText}>
                            {dadosUsuario.instagram}
                        </Text>
                    </View>

                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoLabel}>Bio: </Text>
                        
                        <Text style={styles.infoText}>
                            {dadosUsuario.bio}
                        </Text>
                    </View>

                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoLabel}>Estados onde atua: </Text>
                    </View>

                    <View style={styles.infoTextContainer}>
                        {dadosUsuario.selectEstados.map( ( estado : any ) => {
                            return <Text key={estado} style={styles.infoEstadoTextContainer}>{estado}</Text> 
                        })}
                    </View>
                </ScrollView>

                {/* 
                <TouchableHighlight onPress={handleToDetails} style={{backgroundColor: "#FD9A0B"}}>
                    <Text>Botão que vai para tela de detalhes</Text>
                </TouchableHighlight> */}
            </View>
        </View>
    )
}

export default HomeArtista;