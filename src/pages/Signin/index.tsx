import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';

import Waves from '../../components/waves/waves';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';

//importando contexto
import AuthContext from '../../contexts/auth';

import api from '../../services/api'

import styles from './styles';
// import logoImg from '../Resources/Icons/calendario.svg';
import { useNavigation } from '@react-navigation/native';

interface Usuario {
    email: string;
    senha: string;
}

function Signin () {

    const {navigate} = useNavigation();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [userr, setUserr] = useState<Usuario>({} as Usuario)

    //contexto
    const { signed, signIn, user, logar } = useContext(AuthContext);

    // console.log("Logado::: " +signed);
    // console.log("user::: " +user);

    async function handleSign() {
        signIn()
    }
    
    function goToSignup(){
        navigate('Signup');
    }
    
    async function passaUsuario(){
        // console.log(`Valor do email ${email}`)
        // console.log(`Valor da senha ${senha}`)
        if(!email){
            alert('Campo email vazio')
        }
        if(!senha){
            alert('Campo senha vazio')
        }

        if(email && senha) {
            setUserr({email: email, senha: senha})
            logar(email, senha)
        }
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

    async function signinn(){
        if(!email || !senha){
            alert('Email ou senha invalidos')
        }
        else{
            try {
                const response = await api.post('login', {
                    user: email,
                    password: senha
                })
                console.log(response.data)
                api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

                navigate('Landing')

            } catch (error) {
                alert(error)
            }

        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>{strings.app_name} | {}
                    <Image source={require('../../resources/Icons/calendario.png')} style={styles.imageLogo} />
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

                {/* <TextInputBox
                    placeholder={strings.email}
                    placeholderTextColor= {colors.white}
                    value={email}
                    onChangeText={text => setEmail(text)}
                /> */}
                
                <TextInput 
                    placeholder= {strings.password}
                    placeholderTextColor= {colors.white} 
                    style={styles.textInput}
                    value={senha}
                    onChangeText={text => setSenha(text)} 
                    />

                <RectButton onPress={passaUsuario} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> {strings.sign_in} </Text>
                </RectButton>

                <DivisorBar />


                <View style={styles.socialMediaBox}>
                    
                        <Image 
                            source={require('../../resources/Icons/facebook.png')}
                            style={styles.faceBook}
                        />
                    
                    
                        <Image 
                            source={require('../../resources/Icons/gmail.png')}
                            style={styles.faceBook}
                        />
                    
                </View>


                <Text style={styles.orText}> {strings.or} </Text>

                <Text onPress={goToSignup} style={styles.signupButtonText}> {strings.create_account} </Text>
            </View>

            <Waves />
        </View>
    )
}

export default Signin;