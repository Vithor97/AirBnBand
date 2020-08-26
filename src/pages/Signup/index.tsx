import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import Waves from '../../components/waves/waves';
import BackArrow from '../../components/backArrow';

import styles from './styles';
import global from '../../styles/global';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

function Signup () {
    const [senha, setSenha] = useState('')
    
    const {navigate, goBack} = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    function goToArtistSignUp(){
        navigate('ArtistSignUp');
    }

    return (
        <View style={styles.container}>
            <View style={global.headerContainer}>
                <BackArrow />
            </View>

            <View style={global.contentContainer}>
                <Text style={styles.registerText}>{strings.registerQuestion}</Text>

                <View style={styles.optionContainer}>
                    <BorderlessButton onPress={goToArtistSignUp}>
                        <Image source={require('../../resources/Icons/microfone_laranja.png')} style={styles.optionIcon} />

                        <Text style={styles.optionText}>{strings.artist}</Text>
                    </BorderlessButton>
                </View>

                <View style={styles.optionContainer}>
                    <Image source={require('../../resources/Icons/acordo_laranja.png')} style={styles.optionIcon} />

                    <Text style={styles.optionText}>{strings.hirer}</Text>
                </View>
            </View>

            <Waves />
        </View>
    )
}

export default Signup;