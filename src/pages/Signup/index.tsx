import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';
import components from '../../resources/components/components';
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
                <BorderlessButton style={components.backArrowContainer}  onPress={goBackScreen}>
                    <Image source={require('../../resources/Icons/seta_voltar_laranja.png')} style={components.backArrow} />
                </BorderlessButton>
            </View>

            <View style={components.contentContainer}>
                <Text style={styles.registerText}>{strings.registerQuestion}</Text>

                <View style={styles.optionContainer}>
                    <Image source={require('../../resources/Icons/microfone_laranja.png')} style={styles.optionIcon} />

                    <Text style={styles.optionText}>{strings.artist}</Text>
                </View>

                {/* <View style={components.divisorBar}/> */}

                <View style={styles.optionContainer}>
                    <Image source={require('../../resources/Icons/acordo_laranja.png')} style={styles.optionIcon} />

                    <Text style={styles.optionText}>{strings.hirer}</Text>
                </View>
            </View>

            {/* <View style={styles.headerComponent}>
                <Text onPress={goToSignin} style={styles.backButtonText}> Já possui conta? </Text>

                <Text style={styles.label}>Como você deseja se cadastrar?</Text>
            </View>

            <View style={components.divisorBar}/>
            
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor= {colors.white}
                    style={components.textInput}
                    value={senha}
                    onChangeText={text => setSenha(text)} 
                />

                <RectButton style={components.defaultButton}>
                    <Text style={styles.submitButtonText}>Continuar cadastro</Text>
                </RectButton>
            </View>

            <Text onPress={goToSignin} style={styles.backButtonText}> Já possui conta? </Text>
             */}

            <View style={components.wavesContainer}>
                <Image source={require('../../resources/Images/onda_laranja_escura.png')} style={components.waveFooterDark} />

                <Image source={require('../../resources/Images/onda_laranja.png')} style={components.waveFooter} />
            </View>
        </View>
    )
}

export default Signup;