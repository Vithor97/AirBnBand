import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text, SafeAreaView , YellowBox} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import ViewPager  from '@react-native-community/viewpager';
import {Formik} from 'formik';
import * as Yup from "yup";

import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';
import backArrow from '../../components/photoInput/styles';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';
import ConfirmaBtn from '../../components/confirmaBtn';
import MensagemErro from '../../components/errorMessage'

import styles from './styles';
import global from '../../styles/global';

import {Picker} from '@react-native-community/picker';
import MultiSelect from 'react-native-multiple-select';
import * as ImagePicker from 'expo-image-picker'

import api from '../../services/api';

YellowBox.ignoreWarnings(['VirtualizedLists']);

console.ignoredYellowBox = [
    'VirtualizedLists'
]

function CadastroArtista () {

    const items = [{
        id: '92iijs7yta',
        name: 'RJ'
      }, {
        id: 'a0s0a8ssbsd',
        name: 'SP'
      }, {
        id: '16hbajsabsd',
        name: 'BA'
      }, {
        id: 'nahs75a5sg',
        name: 'MG'
      }, {
        id: '667atsas',
        name: 'RS'
      }, {
        id: 'hsyasajs',
        name: 'MT'
      }, {
        id: 'djsjudksjd',
        name: 'KR'
      }, {
        id: 'sdhyaysdj',
        name: 'JP'
      }, {
        id: 'suudydjsjd',
        name: 'BR'
        }
    ];
    const Estilos = [
        {id: 0, nome: "Escolha Estilo Musical", value:""},
        {id: 1, nome: "Forró", value:"forro"},
        {id: 2, nome: "Rock", value:"rock"},        
    ]
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();
    const teste  = useRef<MultiSelect | null | HTMLInputElement | any>();

    const [selectedItems , setSelectedItems ] = useState([])
    
    function onSelectedItemsChange (selectedItem: any) {
        setSelectedItems(selectedItem)
    };
    
    const {navigate, goBack} = useNavigation();
    //precisei criar a referencia para setar a pagina
    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)

    //Seta se tem erro de validação no form
    const [liberado, setLiberado] = useState(true)
    const tipoUsuario = "Artista";

    const [avatar, setAvatar] = useState<any>();

    const [estiloMusical, setEstiloMusical] = useState<string | number>("");

    //Checkbox para verificar se o cara quer o numero visivel
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
        instagram: Yup.string().required(strings.errorMessages.required),
        bio: Yup.string().required(strings.errorMessages.required).max(25, "Maximo 50 caracteres"),
        cnpj: Yup.string().required(strings.errorMessages.required),
        telefone: Yup.string().required(strings.errorMessages.required),
        nomeArtistico: Yup.string().required(strings.errorMessages.required),
        estiloMusical: Yup.string().required(strings.errorMessages.required),
        qtdIntegrantes: Yup.string().required("Quantidades de membros").min(1, "Deve ter pelo menos um membro")
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
        if(page>=3) {
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
                estiloMusical: "",
                qtdIntegrantes: "",
                instagram: "",
                bio: "",
            }}
            
            onSubmit={async(values, actions)=>{
                let valor: any = {}
                valor = values;
                //adiciona o item select Item no Array
                valor.selectEstados = selectedItems;
                valor.contatoVisivel = toggleCheckBox;
                valor.tipoUsuario = tipoUsuario;
                if(avatar){
                    valor.avatar = avatar.uri;
                }
                
            
                let result: any = await api.cadastraArtista(valor);
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
                            </BorderlessButton>
                        </View>

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
                                
                        {errors.nomeArtistico &&  touched.nomeArtistico && mensagemDeErro(errors.nomeArtistico)} 
                        <TextInputBox
                            style={styles.textInput}
                            placeholder={strings.artisticName}
                            placeholderTextColor= {colors.white}
                            value={values.nomeArtistico}
                            onBlur={()=>setFieldTouched('nomeArtistico', true)}
                            onChangeText={handleChange("nomeArtistico")}
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
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                tintColors={{true: '#FCCE00'}}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={styles.textCheckbox}>contato visivel para contratantes?</Text>
                        </View>


                        
        
                    </View>
                </View>
            </ScrollView>
            
            <SafeAreaView  style={{flex: 1}}>
            <ScrollView>
                <View key="3">
                    <Text style={{marginBottom: 10, marginLeft: 10, fontSize: 16, fontWeight:"bold", color: '#FD9A0B'}}>Quais regiões tem disponibilidade de atuar?</Text>
                    <Text style={{margin: 10}}>Regiões de atuações: </Text>
                    <View style={styles.inputsContainer}>
                        <View style={{ flex: 0 }}>
                        <ScrollView>

                        <MultiSelect
                            items={items}
                            uniqueKey="name"
                            //ref={(component) => { console.log("component") }}
                            onSelectedItemsChange={onSelectedItemsChange}
                            ref={teste}  
                            selectedItems={selectedItems}
                            selectText="Estados"
                            searchInputPlaceholderText="Search Items..."
                            onChangeInput={ (text)=> console.log(text)}
                            //altFontFamily="ProximaNova-Light"
                            tagRemoveIconColor="#E10101"
                            tagBorderColor="#FD9A0B"
                            tagTextColor="#FD9A0B"
                            selectedItemTextColor="#09E101"
                            selectedItemIconColor="#FD9A0B"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#CCC' }}
                            submitButtonColor="#CCC"
                            submitButtonText="Submit"
                            />
                            <View>
                            {/* {selectedItems} */}
                                <Text>{selectedItems}</Text>
                            </View>
                        </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>

            </SafeAreaView>
            <ScrollView>
                <View key="4">
                    <View style={styles.inputsContainer}>

                        
                        {errors.estiloMusical &&  touched.estiloMusical && mensagemDeErro(errors.estiloMusical)}
                        <Text>Estilo musical: </Text>
                        <View style={styles.dropDownListContainer}>
                            <Picker
                                selectedValue={estiloMusical}
                                style={styles.dropdownList}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setEstiloMusical(itemValue)
                                    
                                    Estilos.forEach(e =>{
                                        if(e.id === itemIndex){
                                            values.estiloMusical = e.value
                                            setFieldTouched("estiloMusical", true)
                                        }
                                    })
                                    
                                    console.log(values.estiloMusical)
                                    }
                                }
                                mode="dropdown">
                                {Estilos.map((valor, key)=>(
                                    <Picker.Item  key={key} label={valor.nome} value={valor.value} />
                                ))}
                            </Picker> 
                        </View>
                        
                        {errors.instagram &&  touched.instagram && mensagemDeErro(errors.instagram)}
                        <TextInputBox
                            style={styles.textInput}
                            placeholder={strings.instagram}
                            placeholderTextColor= {colors.white}
                            value={values.instagram}
                            onBlur={()=>setFieldTouched('instagram', true)}
                            onChangeText={handleChange("instagram")}
                        />
                        
                        {errors.qtdIntegrantes  &&  touched.qtdIntegrantes && mensagemDeErro(errors.qtdIntegrantes)}
                        <TextInputBox
                            style={styles.textInput}
                            placeholder={"Quantidade de pessoas"}
                            placeholderTextColor= {colors.white}
                            value={values.qtdIntegrantes}
                            keyboardType="numeric"
                            onBlur={()=>setFieldTouched('qtdIntegrantes', true)}
                            maxLength={2}
                            onChangeText={handleChange("qtdIntegrantes")}    
                        />
                        
                        {errors.bio &&  touched.bio && mensagemDeErro(errors.bio)}
                        <TextInputBox
                            style={styles.bio}
                            placeholder="Bio"
                            placeholderTextColor= {colors.white}
                            value={values.bio}
                            multiline={true}
                            onChangeText={handleChange("bio")}
                            onBlur={()=>setFieldTouched('bio', true)}
                        /> 
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
                                <ProgressBallEmpty />
                            </ProgressBallsContainer>
                        )
                    }
                    else if(page === 2){
                        return (
                            <ProgressBallsContainer>
                                <ProgressBallFilled />

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
                                
                                <ProgressBallFilled />
                            </ProgressBallsContainer>
                        )
                    }
                }()}
                {page == 3 ? <ConfirmaBtn onNext={handleSubmit}/> : <NextArrowButton onNext={btnAvancaViewPager}/> }
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