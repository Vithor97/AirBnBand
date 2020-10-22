import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text} from 'react-native';
import ViewPager  from '@react-native-community/viewpager';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';
import * as Yup from "yup";

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';

import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';
import ConfirmaBtn from '../../components/confirmaBtn';
import NextArrowButton from '../../components/nextArrowButton';
import MensagemErro from '../../components/errorMessage'
import PhotoInput from '../../components/photoInput';

import api from '../../services/api';

import styles from './styles';
import global from '../../styles/global';

function CadastroContratante () {

    let [page, setPagee] = useState(0)

    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();
    //Validacao de formulario
    const FormSchema = Yup.object().shape({
        nome: Yup.string().min(4, "Minimun length of 4").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        senha: Yup.string().min(4, "Minimun length of 8").required("Required"),
        senhaRepete: Yup.string()
        .oneOf([Yup.ref("senha")], "Senhas devem ser iguais")
        .min(4, "Minimun length of 4")
        .required("Required"),
        cep:Yup.number().required("Obrigatório").typeError("Somente numeros"),
        logradoro: Yup.string().required("Obrigatório"),
        cidade: Yup.string().required("Obrigatório"),
        bairro: Yup.string().required("Obrigatório") ,
        numero: Yup.string().required("Obrigatório"),
        cnpj: Yup.string().required("Obrigatório"),
        telefone: Yup.string().required("Obrigatório") ,
        nomeArtistico: Yup.string().required("Obrigatório"),
    })

    
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

    function estadoScroll (e:any) {
        let valorPage = e.nativeEvent.position;
        setPagee(valorPage);

        console.log(`numero da pagina: ${valorPage}`);
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
                    <Image source={require('../../resources/Icons/acordo_laranja.png')} style={styles.hirerIcon} />
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

                    // onSubmit={async(values, actions)=>{
                    //         console.log(values)
                    //         await console.log(actions)
                    //     }
                    // }

                    onSubmit={async(values, actions)=>{
                        let valor: any = {}
                        valor = values;
                        //adiciona o item select Item no Array
                        // valor.selectEstados = selectedItems;
                        // valor.contatoVisivel = toggleCheckBox;
                        // valor.tipoUsuario = tipoUsuario;
                        // if(avatar){
                        //     valor.avatar = avatar.uri;
                        // }
                        
                        let result: any = await api.cadastraContratante(valor);
                        // alert(result);
                        //console.log(valor);
                        //await console.log(actions.setErrors);
                    }}
    
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
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.fullName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nome}
                                        onBlur={()=>setFieldTouched('nome', true)}
                                        onChangeText={handleChange("nome")}
                                    />
                                    {errors.nome &&  touched.nome ? mensagemDeErro(errors.nome) : null}
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.email}
                                        placeholderTextColor= {colors.white}
                                        value={values.email}
                                        onBlur={()=>setFieldTouched('email', true)}
                                        onChangeText={handleChange("email")}
                                    />
                                    
                                    {errors.email &&  touched.email && mensagemDeErro(errors.email)}
                         
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.password}
                                        placeholderTextColor= {colors.white}
                                        value={values.senha}
                                        onBlur={()=>setFieldTouched('senha', true)}
                                        onChangeText={handleChange("senha")}
                                    />
                                    {errors.senha &&  touched.senha && mensagemDeErro(errors.senha)}
                                      
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.retypePassword}
                                        placeholderTextColor= {colors.white}
                                        value={values.senhaRepete}
                                        onBlur={()=>setFieldTouched('senhaRepete', true)}
                                        onChangeText={handleChange("senhaRepete")}
                                    />
                                    {errors.senhaRepete &&  touched.senhaRepete && mensagemDeErro(errors.senhaRepete)}
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View key="2">        
                                <View style={styles.inputsContainer}>
                                    <PhotoInput />
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.cpfcnpj}
                                        placeholderTextColor= {colors.white}
                                        value={values.cnpj}
                                        onBlur={()=>setFieldTouched('cnpj', true)}
                                        onChangeText={handleChange("cnpj")}
                                    />
                                    {errors.cnpj &&  touched.cnpj && mensagemDeErro(errors.cnpj)}    
                         
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.telephone}
                                        placeholderTextColor= {colors.white}
                                        value={values.telefone}
                                        onBlur={()=>setFieldTouched('telefone', true)}
                                        onChangeText={handleChange("telefone")}
                                    />
                                    {errors.telefone &&  touched.telefone && mensagemDeErro(errors.telefone)} 
                         
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.artisticName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nomeArtistico}
                                        onBlur={()=>setFieldTouched('nomeArtistico', true)}
                                        onChangeText={handleChange("nomeArtistico")}
                                    />
                                    {errors.nomeArtistico &&  touched.nomeArtistico && mensagemDeErro(errors.nomeArtistico)} 
                                </View>
                            </View>
                        </ScrollView>

                        <ScrollView>
                            <View key="3">
                                <View style={styles.inputsContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.postalCode}
                                        placeholderTextColor= {colors.white}
                                        keyboardType="numeric"
                                        value={values.cep}
                                        onBlur={()=>setFieldTouched('cep', true)}
                                        onChangeText={handleChange("cep")}
                                        maxLength={10} 
                                    />
                                    {errors.cep &&  touched.cep && mensagemDeErro(errors.cep)}
                
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.street}
                                        placeholderTextColor= {colors.white}
                                        value={values.logradoro}
                                        onBlur={()=>setFieldTouched('logradoro', true)}
                                        onChangeText={handleChange("logradoro")}
                                    />
                                    {errors.logradoro &&  touched.logradoro && mensagemDeErro(errors.logradoro)}
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.city}
                                        placeholderTextColor= {colors.white}
                                        value={values.cidade}
                                        onBlur={()=>setFieldTouched('cidade', true)}
                                        onChangeText={handleChange("cidade")}
                                    />
                                    {errors.cidade &&  touched.cidade && mensagemDeErro(errors.cidade)}
                                    
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.block}
                                        placeholderTextColor= {colors.white}
                                        value={values.bairro}
                                        onBlur={()=>setFieldTouched('bairro', true)}
                                        onChangeText={handleChange("bairro")}
                                    />
                                    {errors.bairro &&  touched.bairro && mensagemDeErro(errors.bairro)}
                                    
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.number}
                                        placeholderTextColor= {colors.white}
                                        value={values.numero}
                                        onChangeText={handleChange("numero")}
                                        onBlur={()=>setFieldTouched('numero', true)}
                                        keyboardType="numeric"
                                        maxLength={6}
                                    />
                                    {errors.numero &&  touched.numero && mensagemDeErro(errors.numero)}
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
                }}

                </Formik>   
            </View>
        </View>
    );
}

export default CadastroContratante;