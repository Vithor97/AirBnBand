import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView ,Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import DivisorBar from '../../../components/divisorBar';
import MensagemErro from '../../../components/errorMessage'

import {Formik} from 'formik';
import * as Yup from "yup";


import Api from '../../../services/api'

import AuthContext from '../../../contexts/auth';
import { useNavigation } from '@react-navigation/native';



function EditPerfilArtista(){
    const { signOut, usuario, setUsuario } = useContext(AuthContext);
    const { goBack } = useNavigation();
    const dadosUsuario: any = usuario
    
    const [toggleCheckBox, setToggleCheckBox] = useState(dadosUsuario.contatoVisivel as any)

    const FormSchema = Yup.object().shape({
        nome: Yup.string().min(4, "Minimun length of 4").required("Required"),
        nomeArtistico: Yup.string().min(4, "Minimun length of 4").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),        
        cnpj: Yup.string().required("Obrigatório"),
        telefone: Yup.string().required("Obrigatório"),
        instagram: Yup.string().required("Obrigatório"),
        bio: Yup.string().required("Obrigatório"),
        qtdIntegrantes: Yup.string().required("Obrigatório"),

    })

    function mensagemDeErro(e: string){
        return <MensagemErro errorMensgame ={e}/>
    }

    function handleSignOut() {
        signOut();
    }

    

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView  behavior="position">
                <ScrollView  style={styles.containerScrollView}>
                    <View style={styles.formContainer}>
                        <Formik 
                        initialValues={{
                            nome: dadosUsuario.nome as string,
                            nomeArtistico: dadosUsuario.nomeArtistico as string,
                            email: dadosUsuario.email as string,
                            cnpj: dadosUsuario.cnpj as string,
                            telefone: dadosUsuario.telefone as string,
                            instagram: dadosUsuario.instagram as string,
                            bio: dadosUsuario.bio as string,
                            qtdIntegrantes: dadosUsuario.qtdIntegrantes as string,
                            
                        }}
                        
                        onSubmit={async(values)=>{
                            let valorForm: any = {}
                            valorForm = values;
                            valorForm.contatoVisivel = toggleCheckBox
                            valorForm.id = dadosUsuario.id

                            const valor = await Api.atualizaUsuarioArtista(valorForm, setUsuario)

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
                                <TouchableOpacity onPress={()=>{}} style={styles.profileImageContainer}>
                                    {/* <View style={styles.profileImageContainer}> */}
                                        <ImageBackground 
                                            imageStyle={{borderRadius: 15}}
                                            source={{uri: "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_1920x1200.jpg"}}
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
                                    Vitor Miranda
                                </Text>

                                <Text style={{left: '40%', fontSize: 15, fontWeight: 'bold'}}>
                                    Dados
                                </Text>

                                <DivisorBar/>

                                <Text style={styles.textInputTitle}>Nome: </Text>
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

                                <Text style={styles.textInputTitle}>Nome Artistico: </Text>
                                <View style={styles.action}>
                                    <FontAwesome name="user-o" size={20} />
                                    <TextInput
                                        value={values.nomeArtistico}
                                        onChangeText={handleChange('nomeArtistico')}
                                        placeholder="Nome artistico"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.nomeArtistico ? mensagemDeErro(errors.nomeArtistico) : null}                
                                </View>
                                <Text style={styles.textInputTitle}>Telefone: </Text>
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

                                <Text style={styles.textInputTitle}>Email: </Text>
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
                                <Text style={styles.textInputTitle}>CNJP/CPF: </Text>
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
                                    Info Artista
                                </Text>

                                <DivisorBar/>

                                <Text style={styles.textInputTitle}>Instagram: </Text>
                                <View style={styles.action}>
                                    <FontAwesome name="instagram" size={20} />
                                    <TextInput
                                        value={values.instagram}
                                        onChangeText={handleChange('instagram')}
                                        placeholder="Instagram"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.instagram ? mensagemDeErro(errors.instagram) : null}                
                                </View>

                                <Text style={styles.textInputTitle}>Bio: </Text>
                                <View style={styles.action}>
                                    <FontAwesome name="book" size={20} />
                                    <TextInput
                                        value={values.bio}
                                        onChangeText={handleChange('bio')}
                                        placeholder="Biografia"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.bio ? mensagemDeErro(errors.bio) : null}                
                                </View>

                                <Text style={styles.textInputTitle}>Quantidade de integrantes: </Text>
                                <View style={styles.action}>
                                    <FontAwesome name="users" size={20} />
                                    <TextInput
                                        value={values.qtdIntegrantes}
                                        onChangeText={handleChange('qtdIntegrantes')}
                                        placeholder="Integrantes"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/>
                                        {errors.qtdIntegrantes ? mensagemDeErro(errors.qtdIntegrantes) : null}                
                                </View>

                                <Text style={styles.textInputTitle}>contato visivel para contratantes?: </Text>
                                <View style={styles.action}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        tintColors={{true: '#FCCE00'}}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Text>{toggleCheckBox ? 'Visivel' : 'Não visivel'}</Text>
                                </View>

               

                                {/* <Text style={styles.textInputTitle}>CEP: </Text>
                                <View style={styles.action}>
                                    <Icon name="map-marker-outline" size={20} />
                                    <TextInput
                                        value={values.cep}
                                        onChangeText={handleChange('cep')}
                                        placeholder="Cidade"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}/> 
                                        {errors.cep ? mensagemDeErro(errors.cep) : null}               
                                </View> */}
                                

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

export default EditPerfilArtista;