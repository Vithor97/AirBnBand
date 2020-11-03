import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import styles from './styles';


function Pesquisa(){

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.searchBarTextInput}/>
                </View>

                <View style={styles.searchIconContainer}>
                    <Image style={styles.searchIcon} source={require("../../resources/Icons/microfone_branco.png")}/>
                </View>
            </View>
        </View>
    )
}

export default Pesquisa;