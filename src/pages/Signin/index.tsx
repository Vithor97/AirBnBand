import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'

import styles from './styles';
// import logoImg from '../Resources/Icons/calendario.svg';
import { useNavigation } from '@react-navigation/native';

function Signin () {

    const {navigate} = useNavigation();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function goToSignup(){
        navigate('Signup');
    }

    function login(){
        if(email === 'vitor' || senha === '123'){
            setSenha('')
            setEmail('')
            navigate('Landing')
        }
        else{
            alert('Senha inválida')
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>AirBnBand | {} 
                    <Image source={require('../../resources/Icons/calendario.png')} style={styles.imageLogo} />
                    {/* <div className="logo-container">
                        <img src={logoImg} alt="Proffy"/>
                    </div> */}
                </Text>
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

                <RectButton onPress={login} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Entrar</Text>
                </RectButton>

            </View>  

            <View style={styles.signupContainer}>
                <RectButton onPress={goToSignup}>
                    <Text style={styles.signupButtonText}>Cadastre-se</Text>
                </RectButton>
            </View>
            
            <Image source={require('../../resources/Images/onda_laranja_escura.png')} style={styles.imageFooterDark} />

            <Image source={require('../../resources/Images/onda_laranja.png')} style={styles.imageFooter} />
        </View>
    )
}

export default Signin;