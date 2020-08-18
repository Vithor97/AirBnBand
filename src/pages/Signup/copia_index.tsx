import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import components from '../../resources/components/components';
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';

function Signup () {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const {navigate} = useNavigation();

    function goToSignin(){
        navigate('Signin')
    }

    return (
        <View style={styles.container}>       
            <View style={styles.headerComponent}>
                <Text style={styles.label}>{strings.register}</Text>
            </View>

            <View style={components.divisorBar}/>
            
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder="Nome"  
                    style={components.textInput}
                    placeholderTextColor= {colors.white}
                    value={nome}
                    onChangeText={text => setNome(text)}
                    />
                <TextInput 
                    placeholder="Email"  
                    style={components.textInput}
                    placeholderTextColor= {colors.white}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
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

            <View style={styles.signupContainer}>
                <RectButton onPress={goToSignin}>
                    <Text style={styles.backButtonText}>Já possui conta?</Text>
                </RectButton>
            </View> 
        </View>
    )
}

export default Signup;