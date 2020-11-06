import React from 'react'
import { View, ScrollView, TextInput, Text, Image } from 'react-native'
import {BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function Pesquisa(){

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <TextInput style={styles.searchBarTextInput}/>
                    </View>

                    <BorderlessButton style={styles.searchIconContainer}>
                        <Image style={styles.searchIcon} source={require("../../resources/Icons/lupa_laranja.png")}/>
                    </BorderlessButton>
                </View>

                {/* <ScrollView style={styles.suggestionsContainer}>
                    <View style={styles.separationBar}/>

                    <BorderlessButton style={styles.suggestionCard}>
                        <View  style={styles.suggestionIconContainer}>
                            <Image style={styles.suggestionIcon} source={require("../../resources/Icons/microfone_laranja.png")}/>
                        </View>

                        <View style={styles.suggestionNameContainer}>
                            <Text style={styles.suggestionName}> Nome Artista </Text>
                        </View>
                    </BorderlessButton>

                    <BorderlessButton style={styles.suggestionCard}>
                        <View  style={styles.suggestionIconContainer}>
                            <Image style={styles.suggestionIcon} source={require("../../resources/Icons/microfone_laranja.png")}/>
                        </View>

                        <View style={styles.suggestionNameContainer}>
                            <Text style={styles.suggestionName}> Nome Artista </Text>
                        </View>
                    </BorderlessButton>

                    <BorderlessButton style={styles.suggestionCard}>
                        <View  style={styles.suggestionIconContainer}>
                            <Image style={styles.suggestionIcon} source={require("../../resources/Icons/microfone_laranja.png")}/>
                        </View>

                        <View style={styles.suggestionNameContainer}>
                            <Text style={styles.suggestionName}> Nome Artista </Text>
                        </View>
                    </BorderlessButton>
                </ScrollView> */}
            </View>

            <View style={styles.filtersContainer}>
                <Text style={styles.filterBox}>Filtrar por:</Text>

                <Text style={styles.filterBox}>Ordenar por:</Text>
            </View>

            <ScrollView style={styles.resultsContainer}></ScrollView>
        </View>
    )
}

export default Pesquisa;