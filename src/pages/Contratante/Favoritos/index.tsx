import React, { useContext, useEffect, useState } from 'react'
import { View, TextInput, Text, Image, Button, ScrollView } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import AttractionCard from '../../../components/attractionCard';

import styles from './styles';
import AuthContext from '../../../contexts/auth';
import Api from '../../../services/api'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

console.ignoredYellowBox = [
    'Setting a timer'
];

function Favoritos () {

    const { usuario } = useContext(AuthContext);
    const [dados, setDados] = useState([]);
    const [ sugestoes, setSugestoes ] = useState( [] );

    const dadosUsuario: any = usuario

    useEffect(() => {
        async function getFavorites() {
            setDados([]);
             await Api.pegaArtistasFavoritos(dadosUsuario.id, setDados);
          }
        
        getFavorites();
    }, [])

    function procuraUsuario (texto: any) {
        setSugestoes(dados)
        let arrr = dados
        //console.log(sugestoes)
        if(texto!==""){
            let arr = arrr.filter((i: any) =>{
                return i.nomeArtistico.includes(texto)
                //i.nome.includes(texto)
            })
            setDados(arr)
        }
        else{
            //Api.pegaArtistasFavoritos(dadosUsuario.id, setDados)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <TextInput style={styles.searchBarTextInput} placeholder="Buscar" onChangeText={ ( text ) => procuraUsuario( text ) }/>
                    </View>

                    <BorderlessButton style={styles.searchIconContainer}>
                        {/* <Image style={styles.searchIcon} source={require("../../../resources/Icons/lupa_laranja.png")}/> */}
                    </BorderlessButton>
                </View>

            </View>
            
            <ScrollView style={styles.attractionCardsContainer}>
                {
                    dados.map((m:any) => {
                        console.log(m)
                        return <AttractionCard key={m.id} dados = {m}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Favoritos;