import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';


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
                <Text style={styles.titulo}>{strings.app_name} | {}
                    <Image source={require('../../resources/Icons/calendario.png')} style={styles.imageLogo} />
                    {/* <div className="logo-container">
                        <img src={logoImg} alt="Proffy"/>
                    </div> */}
                </Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder={strings.email}  
                    style={styles.textInput}
                    placeholderTextColor= {colors.white}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                <TextInput 
                    placeholder= {strings.password}
                    placeholderTextColor= {colors.white} 
                    style={styles.textInput}
                    value={senha}
                    onChangeText={text => setSenha(text)} 
                    />

                <RectButton onPress={login} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> {strings.sign_in} </Text>
                </RectButton>

                <View style={styles.divisorBar}></View>

                <Text style={styles.orText}> {strings.or} </Text>

                <Text onPress={goToSignup} style={styles.signupButtonText}> {strings.create_account} </Text>
            </View>  
{/* 
            <View style={styles.signupContainer}>
                
            </View> */}
            
            <Image source={require('../../resources/Images/onda_laranja_escura.png')} style={styles.imageFooterDark} />

            <Image source={require('../../resources/Images/onda_laranja.png')} style={styles.imageFooter} />
        </View>
    )
}

export default Signin;