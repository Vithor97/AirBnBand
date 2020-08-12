import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'


import styles from './styles';
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
                <Text style={styles.label}>Cadastro</Text>
            </View>
            <View style={styles.lineStyle}/>
            
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder="Nome"  
                    style={styles.textInput}
                    placeholderTextColor="#8A927F"
                    value={nome}
                    onChangeText={text => setNome(text)}
                    />
                <TextInput 
                    placeholder="Email"  
                    style={styles.textInput}
                    placeholderTextColor="#8A927F"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor="#8A927F"
                    style={styles.textInput}
                    value={senha}
                    onChangeText={text => setSenha(text)} 
                    />

                <RectButton style={styles.submitButton}>
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