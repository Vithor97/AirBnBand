import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';

import Waves from '../../components/waves/waves';
import BackArrow from '../../components/backArrow/backArrow';

import styles from './styles';
import components from '../../components/components';
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';

function Signup () {
    const [senha, setSenha] = useState('')
    
    const {navigate, goBack} = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <View style={styles.container}>
            <View style={components.headerContainer}>
                <BackArrow />
            </View>

            <View style={components.contentContainer}>
                <Text style={styles.registerText}>{strings.registerQuestion}</Text>

                <View style={styles.optionContainer}>
                    <Image source={require('../../resources/Icons/microfone_laranja.png')} style={styles.optionIcon} />

                    <Text style={styles.optionText}>{strings.artist}</Text>
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