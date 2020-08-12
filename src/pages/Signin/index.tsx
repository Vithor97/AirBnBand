import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function Signin () {

    const {navigate} = useNavigation();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function goToSignup(){
        navigate('Signup');
    }
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>AirBnBand | @</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder="Email"  
                    style={styles.textInput}
                    placeholderTextColor="#FFFFFF"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor="#FFFFFF" 
                    style={styles.textInput}
                    value={senha}
                    onChangeText={text => setSenha(text)} 
                    />

                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Entrar</Text>
                </RectButton>

            </View>  

            <View style={styles.signupContainer}>
                <RectButton onPress={goToSignup}>
                    <Text style={styles.signupButtonText}>Cadastre-se</Text>
                </RectButton>
            </View> 
        </View>
    )
}

export default Signin;