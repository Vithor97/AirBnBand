import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView ,Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import DivisorBar from '../../components/divisorBar';
import MensagemErro from '../../components/errorMessage'

import {Formik} from 'formik';
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';


import Api from '../../services/api'

import AuthContext from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

function Configuracao(){
    const { signOut, usuario, setUsuario } = useContext(AuthContext);
    const { goBack } = useNavigation();

    const dadosUsuario: any = usuario

    const [avatar, setAvatar] = useState<any>();

    async function imagePickerCall() {   
        const data = await ImagePicker.launchImageLibraryAsync({})
        if( data.cancelled){
            return
        }
        if(!data.uri){
            return
        }
        //const dadosFotos = data.uri;
        //console.log(dadosFotos.substring(dadosFotos.lastIndexOf('/') + 1))
        //console.log(data.uri)
        setAvatar(data)
    }

    const FormSchema = Yup.object().shape({
        nome: Yup.string().min(4, "Minimun length of 4").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        cep:Yup.number().required("Obrigatório").typeError("Somente numeros"),
        logradoro: Yup.string().required("Obrigatório"),
        cidade: Yup.string().required("Obrigatório"),
        uf: Yup.string().required("Obrigatório"),
        bairro: Yup.string().required("Obrigatório") ,
        numero: Yup.string().required("Obrigatório"),
        cnpj: Yup.string().required("Obrigatório"),
        telefone: Yup.string().required("Obrigatório") ,
        nomeEstabelecimento: Yup.string().required("Obrigatório"),
    })

    function mensagemDeErro(e: string){
        return <MensagemErro errorMensgame ={e}/>
    }

    function handleSignOut() {
        signOut();
    }

    

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView  behavior="padding">
                <ScrollView  style={styles.containerScrollView}>
                    <View style={styles.formContainer}>
                        <Formik 
                        initialValues={{
                            nome: dadosUsuario.nome as string,
                            email: dadosUsuario.email as string,
                            cnpj: dadosUsuario.cnpj as string,
                            telefone: dadosUsuario.telefone as string,
                            nomeEstabelecimento: dadosUsuario.nomeEstabelecimento as string,
                            cep: dadosUsuario.cep as string,
                            logradoro: dadosUsuario.logradoro as string,
                            cidade: dadosUsuario.cidade as string,
                            bairro: dadosUsuario.bairro as string,
                            numero: dadosUsuario.numero as string,
                            uf: dadosUsuario.uf as string,   
                            avatar: dadosUsuario.avatar as string
                        }}
                        
                        onSubmit={async(values)=>{
                            let valorForm: any = {}
                            valorForm = values;
                            valorForm.id = dadosUsuario.id

                            if(avatar){
                                valorForm.avatar = avatar.uri
                            }

                            const valor = await Api.atualizaUsuario(valorForm, setUsuario)

                            if(valor=== true){
                                alert('usuario atualizado com sucesso')
                                goBack()
                            }
                        }}
                        
                        validationSchema={FormSchema}
                        >
                        
                        {({values , handleChange, errors, handleSubmit, touched, setFieldTouched, setFieldValue})=>{
                            return (
                                <>
                                <TouchableOpacity onPress={imagePickerCall} style={styles.profileImageContainer}>
                                    {/* <View style={styles.profileImageContainer}> */}
                                        <ImageBackground 
                                            imageStyle={{borderRadius: 15}}
                                            source={{uri: avatar ? avatar.uri : dadosUsuario.avatar }}
                                            style={styles.profileImage}>
                                            <View style={styles.imageSelectIconContainer}>
                                                <Icon 
                                                    name="camera" 
                                                    size={35} 
                                                    style={styles.imageSelectIcon}/>
                                            </View>
                                        </ImageBackground>
                                    {/* </View> */}
                                </TouchableOpacity>

                                <Text style={styles.profileName}>
                                    {dadosUsuario.nome}
                                </Text>

                                <Text style={{left: '40%', fontSize: 15, fontWeight: 'bold'}}>
                                    Dados
                                </Text>

                                <DivisorBar/>

                                <View style={styles.action}>
                                    <FontAwesome name="user-o" size={20} />

                                    <TextInput
                                        value={values.nome}
                                        onChangeText={handleChange('nome')}
                                        placeholder="Nome"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.nome ? mensagemDeErro(errors.nome) : null}                
                                </View>
                                    
                                <View style={styles.action}>
                                    <FontAwesome name="user-o" size={20} />

                                    <TextInput
                                        value={values.nomeEstabelecimento}
                                        onChangeText={handleChange('nomeEstabelecimento')}
                                        placeholder="Sobrenome"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.nomeEstabelecimento ? mensagemDeErro(errors.nomeEstabelecimento) : null}                
                                </View>

                                <View style={styles.action}>
                                    <Feather name="phone" size={20} />

                                    <TextInput
                                        value={values.telefone}
                                        onChangeText={handleChange('telefone')}
                                        keyboardType='number-pad'
                                        placeholder="Telefone"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>  
                                        {errors.telefone ? mensagemDeErro(errors.telefone) : null}              
                                </View>

                                <View style={styles.action}>
                                    <FontAwesome name="envelope-o" size={20} />
                                    <TextInput
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        placeholder="Email"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.email ? mensagemDeErro(errors.email) : null}                
                                </View>

                                <View style={styles.action}>
                                    <FontAwesome name="building-o" size={20} />
                                    <TextInput
                                        value={values.cnpj}
                                        onChangeText={handleChange('cnpj')}
                                        placeholder="CNPJ"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.cnpj ? mensagemDeErro(errors.cnpj) : null}                
                                </View>

                                <Text style={styles.textTypeTitle}>
                                    Localização
                                </Text>

                                <DivisorBar/>

                                <Text style={styles.textInputTitle}>CEP: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.cep}
                                        onChangeText={handleChange('cep')}
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/> 
                                        {errors.cep ? mensagemDeErro(errors.cep) : null}               
                                </View>
                                
                                <Text style={styles.textInputTitle}>Rua: </Text>

                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.logradoro}
                                        onChangeText={handleChange('logradoro')}
                                        placeholder="Endereço"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>  
                                        {errors.logradoro ? mensagemDeErro(errors.logradoro) : null}              
                                </View>

                                <Text style={styles.textInputTitle}>Cidade: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.cidade}
                                        onChangeText={handleChange('cidade')}
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/> 
                                        {errors.logradoro ? mensagemDeErro(errors.logradoro) : null}               
                                </View>

                                <Text style={styles.textInputTitle}>Bairro: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.bairro}
                                        onChangeText={handleChange('bairro')}
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/> 
                                        {errors.bairro ? mensagemDeErro(errors.bairro) : null}               
                                </View>

                                <Text style={styles.textInputTitle}>Estado: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.uf}
                                        onChangeText={handleChange('uf')}
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/> 
                                        {errors.uf ? mensagemDeErro(errors.uf) : null}               
                                </View>

                                <View style={{position: 'relative'}}>
                                    <RectButton style={styles.commandButton} onPress={handleSubmit as any}>
                                        <Text style={styles.panelButtonTitle}>Salvar</Text>
                                    </RectButton>
                                </View>
                                </>
                            )
                        }}

                        </Formik>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Configuracao;