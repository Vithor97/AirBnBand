import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import components from '../../resources/components/components';
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';

function Signup () {
    const [senha, setSenha] = useState('')
    
    const {navigate} = useNavigation();

    function goToSignin(){
        navigate('Signin')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerComponent}>
                <Text onPress={goToSignin} style={styles.backButtonText}> Já possui conta? </Text>

                <Text style={styles.label}>{strings.register}</Text>
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
            
            <Image source={require('../../resources/Images/onda_laranja_escura.png')} style={components.waveFooterDark} />

            <Image source={require('../../resources/Images/onda_laranja.png')} style={components.waveFooter} />
        </View>
    )
}

export default Signup;