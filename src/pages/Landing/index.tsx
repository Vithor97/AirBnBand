import React, { useContext, useEffect, useState } from 'react'
import { View, TextInput, Text, Image, Button, ScrollView } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import AttractionCard from '../../components/attractionCard';

import styles from './styles';
import AuthContext from '../../contexts/auth';
import Api from '../../services/api'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

console.ignoredYellowBox = [
    'Setting a timer'
];

function Landing () {
    const [useer, setUseer] = useState([]);
    const { signOut, user, usuario } = useContext(AuthContext);
    const [dados, setDados] = useState([]);
    const [ sugestoes, setSugestoes ] = useState( [] );

    function handleSignOut() {
        signOut();
    }

    useEffect(() => {
        setDados([]);

        let chama = Api.pegaArtistas(setDados);

        return chama;
    }, [])

    async function pegaTipos(){
        setUseer( await Api.pegaUsuarios() )
       
        await useer.forEach((elemento: any) => { console.log(elemento.email) })
    }

    function pegaEstado(){
        console.log(useer) 
    }

    async function pegaDadosFirebase(){
        console.log( await Api.pegaEnderecos() );
    }

    const handleSugestoes = async ( nome: String ) => {
        setSugestoes( [] );

        setSugestoes( await Api.pegaUsuarios() );

        // sugestoesUpdate();

        // return Api.pegaSugestoesArtistas( setSugestoes, nome );
    }

    const sugestoesUpdate = () => {
        alert("Atualizou");
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <TextInput style={styles.searchBarTextInput} placeholder="Buscar" onChangeText={ ( nome ) => handleSugestoes( nome ) }/>
                    </View>

                    <BorderlessButton style={styles.searchIconContainer}>
                        <Image style={styles.searchIcon} source={require("../../resources/Icons/lupa_laranja.png")}/>
                    </BorderlessButton>
                </View>

                <ScrollView style={styles.suggestionsContainer}>
                    <View style={styles.separationBar}/>

                    {sugestoes.forEach( ( item:any ) => {
                        <BorderlessButton style={styles.suggestionCard} onPress={ () => alert(item.id) }>
                            <View  style={styles.suggestionIconContainer}>
                                {/* <Image style={styles.suggestionIcon} source={
                                    () => {
                                        if( item.avatar ){
                                            { uri: item.avatar } 
                                        }
                                        else{
                                            require("../../resources/Icons/microfone_laranja.png")
                                        }
                                    }
                                }/> */}
                            </View>

                            <View style={styles.suggestionNameContainer}>
                                <Text style={styles.suggestionName}> { item.name } </Text>
                            </View>
                        </BorderlessButton>
                    } )}

                    {/* <BorderlessButton style={styles.suggestionCard}>
                        <View  style={styles.suggestionIconContainer}>
                            <Image style={styles.suggestionIcon} source={require("../../resources/Icons/microfone_laranja.png")}/>
                        </View>

                        <View style={styles.suggestionNameContainer}>
                            <Text style={styles.suggestionName}> Nome Artista </Text>
                        </View>
                    </BorderlessButton> */}
                </ScrollView>
            </View>
            
            <ScrollView style={styles.attractionCardsContainer}>
                {
                    dados.map((m:any) => {
                        return <AttractionCard key={m.id} dados = {m}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Landing;