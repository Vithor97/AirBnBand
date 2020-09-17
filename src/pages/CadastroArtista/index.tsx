import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text, Button } from 'react-native';
import ViewPager  from '@react-native-community/viewpager';

import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';
import PhotoInput from '../../components/photoInput';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';

import styles from './styles';
import global from '../../styles/global';

import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
import * as Yup from "yup";
import ConfirmaBtn from '../../components/confirmaBtn';



function CadastroArtista () {

    const {navigate, goBack} = useNavigation();

    //precisei criar a referencia para setar a pagina
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();

    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)

    //Seta se tem erro de validação no form
    const [liberado, setLiberado] = useState(true)


    //etapa 1
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaRepete, setSenhaRepete] = useState('')

    //etapa 2
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nomeArtistico, setNomeArtistico] = useState('')

    //etapa 3
    const [cep, setCep] = useState('')
    const [logradoro, setLogradoro] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')

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


    function SubmitCadastro(){

        console.log('----------- Etapa 1 -----------')
        console.log("nome: "+ nome)
        console.log("email: "+ email)
        console.log("senha: "+ senha)
        console.log("senhaRepete: "+ senhaRepete)


        console.log('----------- Etapa 2 -----------')
        console.log("cnpj: "+ cnpj)
        console.log("telefone: "+ telefone)
        console.log("nome artista: "+ nomeArtistico)

        console.log('----------- Etapa 3 -----------')
        console.log("cep: "+ cep)
        console.log("logradoro: "+ logradoro)
        console.log("cidade: "+ cidade)
        console.log("bairro: "+ bairro)
        console.log("numero: "+ numero)
        
    }

    function estadoScroll (e:any) {
        let valorPage = e.nativeEvent.position;
        setPagee(valorPage);

        console.log(`numero da pagina: ${valorPage}`)  ;
    }

    function numPag(e:any){
        return e.nativeEvent.position;
    }

    function btnAvancaViewPager(){
        if(page>=2) {
            // viewPager.current.setPage(0)
            // viewPager.current.setPage(page)

            // Implementar a conclusão do cadastro
            
            SubmitCadastro();
            //goToHome();
        }else{
            viewPager.current.setPage(page+1)
            
        }          
    }

    function verificaErros(erros: any){
        if(!erros){
            console.log("tem erros")
        }
        else{
            console.log("não tem erros")
        }
    }

    

    // function goBackScreen(){
    //     return goBack();
    // }

    function goToHome(){
        navigate('Signin');
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
                <Formik initialValues={{
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
                {({values , handleChange, errors, handleSubmit, isValid}) =>{
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
                                        onChangeText={handleChange("nome")}
                                    />
                                    {(function() {
                                        if(errors.nome) { 
                                            setLiberado(false)    
                                            return <Text>{errors.nome}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    // errors.nome && <Text>{errors.nome}</Text>
                                    }
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.email}
                                        placeholderTextColor= {colors.white}
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                    />
                                    {(function() {
                                        if(errors.email) { 
                                            setLiberado(false)    
                                            return <Text>{errors.email}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.password}
                                        placeholderTextColor= {colors.white}
                                        value={values.senha}
                                        onChangeText={handleChange("senha")}
                                    />
                                    {(function() {
                                        if(errors.senha) { 
                                            setLiberado(false)    
                                            return <Text>{errors.senha}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }
                                    
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.retypePassword}
                                        placeholderTextColor= {colors.white}
                                        value={values.senhaRepete}
                                        onChangeText={handleChange("senhaRepete")}
                                    />
                                    {(function() {
                                        if(errors.senhaRepete) { 
                                            setLiberado(false)    
                                            return <Text>{errors.senhaRepete}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }
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
                                        onChangeText={handleChange("cnpj")}
                                    />

                                    {(function() {
                                        if(errors.cnpj) { 
                                            setLiberado(false)    
                                            return <Text>{errors.cnpj}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }   
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.telephone}
                                        placeholderTextColor= {colors.white}
                                        value={values.telefone}
                                        onChangeText={handleChange("telefone")}
                                    />
                                    {(function() {
                                        if(errors.telefone) { 
                                            setLiberado(false)    
                                            return <Text>{errors.telefone}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.artisticName}
                                        placeholderTextColor= {colors.white}
                                        value={values.nomeArtistico}
                                        onChangeText={handleChange("nomeArtistico")}
                                    />

                                    {(function() {
                                        if(errors.nomeArtistico) { 
                                            setLiberado(false)    
                                            return <Text>{errors.nomeArtistico}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
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
                                        onChangeText={handleChange("cep")}
                                        maxLength={10} 
                                    />

                                    {(function() {
                                        if(errors.cep) { 
                                            setLiberado(false)    
                                            return <Text>{errors.cep}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    }  

                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.street}
                                        placeholderTextColor= {colors.white}
                                        value={values.logradoro}
                                        onChangeText={handleChange("logradoro")}
                                    />
                                    {(function() {
                                        if(errors.logradoro) { 
                                            setLiberado(false)    
                                            return <Text>{errors.logradoro}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
                        
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.city}
                                        placeholderTextColor= {colors.white}
                                        value={values.cidade}
                                        onChangeText={handleChange("cidade")}
                                    />
                                    {(function() {
                                        if(errors.cidade) { 
                                            setLiberado(false)    
                                            return <Text>{errors.cidade}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
                                    
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.block}
                                        placeholderTextColor= {colors.white}
                                        value={values.bairro}
                                        onChangeText={handleChange("bairro")}
                                    />
                                    {(function() {
                                        if(errors.bairro) { 
                                            setLiberado(false)    
                                            return <Text>{errors.bairro}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
                                    
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={strings.number}
                                        placeholderTextColor= {colors.white}
                                        value={values.numero}
                                        onChangeText={handleChange("numero")}
                                        keyboardType="numeric"
                                        maxLength={6}
                                    />
                                    {(function() {
                                        if(errors.numero) { 
                                            setLiberado(false)    
                                            return <Text>{errors.numero}</Text>;
                                        }
                                        else{
                                            setLiberado(true)
                                        } 
                                        })()
                                    } 
                                </View>
                            </View>
                        </ScrollView>
                        </ViewPager>
                        
                        <View style={styles.flowContainer}>
                            <ProgressBallsContainer>
                                {
                                
                                }
                                <ProgressBallFilled />

                                <ProgressBallEmpty />

                                <ProgressBallEmpty />
                            </ProgressBallsContainer>
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