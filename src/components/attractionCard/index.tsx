import React, {useEffect} from 'react';
import { Image, View, Text } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import RatedStars from '../ratedStars';

import styles from './styles';
import api from '../../services/api';

interface Artista{
    bio: string,
    nome: string,
    cnpj: string,
    email: string,
    contatoVisivel: string,
    estiloMusical: string,
    instagram: string,
    nomeArtistico: string,
    qtdIntegrantes: string,
    selectEstados: string,
    telefone: string,
    tipoUsuario : string,
    avatar: string
}


const AttractionCard : React.FC<any> = ({dados}) => {

    /*
    useEffect(() => {
        definirImagem(dados.avatar);
    }, []) */

    function definirImagem(url:any){
        const img = api.getImage(url)
        console.log(img)
    }

    const { goBack,navigate } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    function goToProfileDetails(){
        navigate('DetralhesPerfil', dados);
    }

    return (
        <View  style={styles.attractionCardContainer}>
            <BorderlessButton style={styles.attractionCardButton}  onPress={goToProfileDetails}>
                <View style={styles.imageContainer}>
                    <View style={styles.atractionImageBallFormContainer}>
                        <Image
                            source={require('../../resources/Icons/photo_laranja.png')}
                            style={styles.atractionImage}
                        />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                <Text style={styles.attractionNameText}>{dados.nomeArtistico}</Text>
                    <Text style={styles.attractionTypeText}>{dados.estiloMusical}</Text>
                    {function(){
                        if(true){
                            // return <Text style={styles.attractionAnotherText}>Estrelas</Text>
                            return <RatedStars />
                        }
                    }()}
                </View>
            </BorderlessButton>
        </View>
    );
}

export default AttractionCard;