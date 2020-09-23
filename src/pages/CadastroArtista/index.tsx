import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text} from 'react-native';
import ViewPager  from '@react-native-community/viewpager';
import {Formik} from 'formik';
import * as Yup from "yup";

import { BorderlessButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';
import PhotoInput from '../../components/photoInput';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';
import ConfirmaBtn from '../../components/confirmaBtn';
import MensagemErro from '../../components/errorMessage'

import styles from './styles';
import global from '../../styles/global';


import backArrow from '../../components/photoInput/styles';

import * as ImagePicker from 'expo-image-picker'



function CadastroArtista () {
    const {navigate, goBack} = useNavigation();
    //precisei criar a referencia para setar a pagina
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();
    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)

    //Seta se tem erro de validação no form
    const [liberado, setLiberado] = useState(true)

    const [avatar, setAvatar] = useState<any>();

    async function imagePickerCall() {
        
        const data = await ImagePicker.launchImageLibraryAsync({})

        if( data.cancelled){
            return
        }
        if(!data.uri){
            return
        }
        console.log(data.uri)
        setAvatar(data)
    }

    //Validacao de formulario
    const FormSchema = Yup.object().shape({
        nome: Yup.string().min(4, strings.errorMessages.minimumLenght).required(strings.errorMessages.required),
        email: Yup.string().email(strings.errorMessages.invalidMail).required(strings.errorMessages.required),
        senha: Yup.string().min(4, strings.errorMessages.minimumLenght).required(strings.errorMessages.required),
        senhaRepete: Yup.string()
        .oneOf([Yup.ref("senha")], strings.errorMessages.unmatchingPasswords)
        .min(4, strings.errorMessages.minimumLenght)
        .required(strings.errorMessages.required),
        cep:Yup.number().required(strings.errorMessages.required).typeError(strings.errorMessages.required),
        logradoro: Yup.string().required(strings.errorMessages.required),
        cidade: Yup.string().required(strings.errorMessages.required),
        bairro: Yup.string().required(strings.errorMessages.required),
        numero: Yup.string().required(strings.errorMessages.required),
        cnpj: Yup.string().required(strings.errorMessages.required),
        telefone: Yup.string().required(strings.errorMessages.required),
        nomeArtistico: Yup.string().required(strings.errorMessages.required),
    })

    function estadoScroll (e:any) {
        let valorPage = e.nativeEvent.position;
        setPagee(valorPage);

        console.log(`numero da pagina: ${valorPage}`);
    }

    function numPag(e:any){
        return e.nativeEvent.position;
    }

    function btnAvancaViewPager(){
        if(page>=2) {
            // viewPager.current.setPage(0)
            // viewPager.current.setPage(page)
            // Implementar a conclusão do cadastro
            //goToHome();
        }
        else{
            viewPager.current.setPage(page+1)  
        }          
    }

    function mensagemDeErro(e: string){
        return <MensagemErro errorMensgame ={e}/>
    }


    return (
        <View style={styles.container}>
            <View style={global.headerContainer}>
                <View style={styles.backArrowContainer}>
                    <BackArrow />
                </View>

                <View style={styles.hirerIconContainer}>
                    <Image source={require('../../resources/Icons/microfone_laranja.png')} style={styles.hirerIcon} />
                </View>
            </View>

            <View style={styles.divisorContainer}>
                <DivisorBar />
            </View>
            
            <View style={styles.contentContainer}>
                <Formik 
                    initialValues={{
                        nome: "",
                        email: "",
                        senha: "",
                        senhaRepete: "",
                        cnpj: "",
                        telefone: "",
                        nomeArtistico: "",
                        cep: "",
                        logradoro: "",
                        cidade: "",
                        bairro: "",
                        numero: "",
                    }}
                    
                    onSubmit={async(values, actions)=>{
                            console.log(values)
                            await console.log(actions)
                        }
                    }
    
                    validationSchema={FormSchema}        
                >
                {({values , handleChange, errors, handleSubmit, touched, setFieldTouched}) =>{
                    //console.log({ values });
                    return(
                        <>
                        <ViewPager ref={viewPager} scrollEnabled={true} onPageSelected={estadoScroll} style={styles.viewPager} initialPage={page}>
                        <ScrollView>
                            <View key="1">
                                <View style={styles.inputsContainer}>
                                    <Text style={styles.addYourData}>{strings.addYourData}</Text>
                        
                                    {/* <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.fullName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nome}
                                        onBlur={()=>setFieldTouched('nome', true)}
                                        onChangeText={handleChange("nome")}
                                    /> */}

                                    {errors.nome &&  touched.nome ? mensagemDeErro(errors.nome) : null}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.fullName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nome}
                                        onBlur={()=>setFieldTouched('nome', true)}
                                        onChangeText={handleChange("nome")}
                                    />

                                    {errors.email &&  touched.email && mensagemDeErro(errors.email)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.email}
                                        placeholderTextColor= {colors.white}
                                        value={values.email}
                                        onBlur={()=>setFieldTouched('email', true)}
                                        onChangeText={handleChange("email")}
                                    />
                         
                                    {errors.senha &&  touched.senha && mensagemDeErro(errors.senha)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.password}
                                        placeholderTextColor= {colors.white}
                                        value={values.senha}
                                        onBlur={()=>setFieldTouched('senha', true)}
                                        onChangeText={handleChange("senha")}
                                    />
                                      
                                    {errors.senhaRepete &&  touched.senhaRepete && mensagemDeErro(errors.senhaRepete)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.retypePassword}
                                        placeholderTextColor= {colors.white}
                                        value={values.senhaRepete}
                                        onBlur={()=>setFieldTouched('senhaRepete', true)}
                                        onChangeText={handleChange("senhaRepete")}
                                    />
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View key="2">        
                                <View style={styles.inputsContainer}>
                                    <View  style={backArrow.photoInputContainer}>
                                        <BorderlessButton style={backArrow.photoInputButton} onPress={imagePickerCall}>
                                            {function(){
                                                if(!avatar){
                                                    return <Image source={require('../../resources/Icons/photo_laranja.png')} 
                                                    style={backArrow.photoInputImageDefault}></Image>
                                                }
                                                else {
                                                    return <Image source={{uri: avatar.uri}} 
                                                    style={backArrow.photoInputImageSelected}></Image>
                                                }
                                            }()}

                                            {/* <Image
                                                {function()=>{
                                                    if(!avatar){
                                                        source={require('../../resources/Icons/photo_laranja.png')} 
                                                    }
                                                    else {
                                                        source={{uri: avatar.uri}} 
                                                    }
                                                }()}

                                                style={backArrow.photoInputImage}
                                             /> */}

                                            {/* <Image
                                               
                                                // source={{uri: avatar ? avatar.uri : selecionaImagem}}
                                                style={backArrow.photoInputImage}
                                            /> */}
                                        </BorderlessButton>
                                    </View>

                                    {/* <PhotoInput imageUri={avatar.uri}/> */}

                                    <Text style={backArrow.photoInputText}>{strings.addImage}</Text>
                        
                                    {errors.cnpj &&  touched.cnpj && mensagemDeErro(errors.cnpj)}    
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.cpfcnpj}
                                        placeholderTextColor= {colors.white}
                                        value={values.cnpj}
                                        onBlur={()=>setFieldTouched('cnpj', true)}
                                        onChangeText={handleChange("cnpj")}
                                    />
                         
                                    {errors.telefone &&  touched.telefone && mensagemDeErro(errors.telefone)} 
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.telephone}
                                        placeholderTextColor= {colors.white}
                                        value={values.telefone}
                                        onBlur={()=>setFieldTouched('telefone', true)}
                                        onChangeText={handleChange("telefone")}
                                    />
                         
                                    {errors.nomeArtistico &&  touched.nomeArtistico && mensagemDeErro(errors.nomeArtistico)} 
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.artisticName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nomeArtistico}
                                        onBlur={()=>setFieldTouched('nomeArtistico', true)}
                                        onChangeText={handleChange("nomeArtistico")}
                                    />
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View key="3">
                                <View style={styles.inputsContainer}>
                                    {errors.cep &&  touched.cep && mensagemDeErro(errors.cep)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.postalCode}
                                        placeholderTextColor= {colors.white}
                                        keyboardType="numeric"
                                        value={values.cep}
                                        onBlur={()=>setFieldTouched('cep', true)}
                                        onChangeText={handleChange("cep")}
                                        maxLength={10} 
                                    />
                
                                    {errors.logradoro && touched.logradoro && mensagemDeErro(errors.logradoro)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.street}
                                        placeholderTextColor= {colors.white}
                                        value={values.logradoro}
                                        onBlur={()=>setFieldTouched('logradoro', true)}
                                        onChangeText={handleChange("logradoro")}
                                    />
                        
                                    {errors.cidade &&  touched.cidade && mensagemDeErro(errors.cidade)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.city}
                                        placeholderTextColor= {colors.white}
                                        value={values.cidade}
                                        onBlur={()=>setFieldTouched('cidade', true)}
                                        onChangeText={handleChange("cidade")}
                                    />
                                    
                                    {errors.bairro &&  touched.bairro && mensagemDeErro(errors.bairro)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.block}
                                        placeholderTextColor= {colors.white}
                                        value={values.bairro}
                                        onBlur={()=>setFieldTouched('bairro', true)}
                                        onChangeText={handleChange("bairro")}
                                    />
                                    
                                    {errors.numero &&  touched.numero && mensagemDeErro(errors.numero)}
                                    <TextInputBox
                                        style={styles.textInput}
                                        placeholder={strings.number}
                                        placeholderTextColor= {colors.white}
                                        value={values.numero}
                                        onChangeText={handleChange("numero")}
                                        onBlur={()=>setFieldTouched('numero', true)}
                                        keyboardType="numeric"
                                        maxLength={6}
                                    />
                                    {/* {(function() {
                                        if(errors.numero) { 
                                            setLiberado(false)    
                                            return <Text>{errors.numero}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }  */}
                                </View>
                            </View>
                        </ScrollView>
                        </ViewPager>
                        
                        <View style={styles.flowContainer}>
                            {/* <ProgressBallsContainer>
                                <ProgressBallFilled />

                                <ProgressBallEmpty />

                                <ProgressBallEmpty />
                            </ProgressBallsContainer> */}

                            {function(){
                                if(page === 0){
                                    return (
                                        <ProgressBallsContainer>
                                            <ProgressBallFilled />

                                            <ProgressBallEmpty />

                                            <ProgressBallEmpty />
                                        </ProgressBallsContainer>
                                    )
                                }
                                else if(page === 1){
                                    return (
                                        <ProgressBallsContainer>
                                            <ProgressBallFilled />

                                            <ProgressBallFilled />

                                            <ProgressBallEmpty />
                                        </ProgressBallsContainer>
                                    )
                                }
                                else {
                                    return (
                                        <ProgressBallsContainer>
                                            <ProgressBallFilled />

                                            <ProgressBallFilled />

                                            <ProgressBallFilled />
                                        </ProgressBallsContainer>
                                    )
                                }
                            }()}

                            {page == 2 ? <ConfirmaBtn onNext={handleSubmit}/> : <NextArrowButton onNext={btnAvancaViewPager}/> }
                            {/* <NextArrowButton onNext={handleSubmit}/> */}
                        </View>
                    </>
                    )
                }
                }                    
                </Formik>   

            </View>
        </View>
    );
}
export default CadastroArtista;