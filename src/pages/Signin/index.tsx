import React, { useState, useContext } from 'react'
import { View, Text, Image } from 'react-native';
import colors from '../../resources/values/colors.json';
import strings from '../../resources/values/strings.json';

import Waves from '../../components/waves/waves';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';
import DefaultButton from '../../components/defaultButton';

//importando contexto
import AuthContext from '../../contexts/auth';

import styles from './styles';
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

    async function handleSign() {
        signIn()
    }
    
    function goToSignup(){
        navigate('Signup');
    }
    
    async function passaUsuario(){
        if(!email){
            alert('Campo email vazio')
        }
        
        if(!senha){
            alert('Campo senha vazio')
        }

        if(email && senha) {
            setUserr({email: email, senha: senha})
            await logar(email, senha)
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
                <TextInputBox
                    placeholder={strings.email}  
                    style={styles.textInput}
                    placeholderTextColor= {colors.white}
                    value={email}
                    onChangeText={(text:string) => setEmail(text)}
                /> 
    
                <TextInputBox
                    placeholder= {strings.password}
                    placeholderTextColor= {colors.white} 
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text:string) => setSenha(text)} 
                />

                <DefaultButton text={strings.sign_in} doIt={passaUsuario} />

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

            <Waves/>
        </View>
    )
}

export default Signin;