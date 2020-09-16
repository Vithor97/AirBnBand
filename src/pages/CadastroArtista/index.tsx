import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
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



function CadastroArtista () {

    const {navigate, goBack} = useNavigation();

    //precisei criar a referencia para setar a pagina
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();

    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)


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
                <ViewPager ref={viewPager} onPageSelected={estadoScroll} style={styles.viewPager} initialPage={page}>
                <ScrollView>
                    <View key="1">
                        <View style={styles.inputsContainer}>
                            <Text style={styles.addYourData}>{strings.addYourData}</Text>
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.fullName}
                                placeholderTextColor= {colors.white}
                                value={nome}
                                onChangeText={(text:string) => setNome(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.email}
                                placeholderTextColor= {colors.white}
                                value={email}
                                onChangeText={(text:string) => setEmail(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.password}
                                placeholderTextColor= {colors.white}
                                value={senha}
                                onChangeText={(text:string) => setSenha(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.retypePassword}
                                placeholderTextColor= {colors.white}
                                value={senhaRepete}
                                onChangeText={(text:string) => setSenhaRepete(text)}
                            />
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
                                value={cnpj}
                                onChangeText={(text:string) => setCnpj(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.telephone}
                                placeholderTextColor= {colors.white}
                                value={telefone}
                                onChangeText={(text:string) => setTelefone(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.artisticName}
                                placeholderTextColor= {colors.white}
                                value={nomeArtistico}
                                onChangeText={(text:string) => setNomeArtistico(text)}
                            />
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
                                value={cep}
                                onChangeText={(text:any) => setCep(text)}
                                maxLength={10} 
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.street}
                                placeholderTextColor= {colors.white}
                                value={logradoro}
                                onChangeText={(text:any) => setLogradoro(text)}
                            />
                
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.city}
                                placeholderTextColor= {colors.white}
                                value={cidade}
                                onChangeText={(text:any) => setCidade(text)}
                            />
                            
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.block}
                                placeholderTextColor= {colors.white}
                                value={bairro}
                                onChangeText={(text:any) => setBairro(text)}
                            />
                            
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings.number}
                                placeholderTextColor= {colors.white}
                                value={numero}
                                onChangeText={(text:any) => setNumero(text)}
                                keyboardType="numeric"
                                maxLength={6}
                            />
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

                    <NextArrowButton onNext={btnAvancaViewPager}/>
                </View>

            </View>
        </View>
    );
}

export default CadastroArtista;