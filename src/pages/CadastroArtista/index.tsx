import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import ViewPager  from '@react-native-community/viewpager';

import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';
import PhotoInput from '../../components/photoInput';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';

// import Etapa1 from './etapa_1';
// import Etapa2 from './etapa_2';
// import Etapa3 from './etapa_3'

import styles from './styles';
import global from '../../styles/global';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function CadastroArtista () {

    function Etapa1 () {
        return (
            <View style={styles.inputsContainer}>
                <Text style={styles.addYourData}>{strings.addYourData}</Text>
    
                <TextInputBox
                    placeholder={strings.fullName}
                    placeholderTextColor= {colors.white}
                    // value={email}
                    // onChangeText={(text:string) => setEmail(text)}
                />
    
                <TextInputBox
                    placeholder={strings.email}
                    placeholderTextColor= {colors.white}
                />
    
                <TextInputBox
                    placeholder={strings.password}
                    placeholderTextColor= {colors.white}
                />
    
                <TextInputBox
                    placeholder={strings.retypePassword}
                    placeholderTextColor= {colors.white}
                />
            </View>
        )
    }

    function Etapa2 () {
        return (
            <View style={styles.inputsContainer}>
                <PhotoInput />
    
                <TextInputBox
                    placeholder={strings.cpfcnpj}
                    placeholderTextColor= {colors.white}
                    // value={email}
                    // onChangeText={(text:string) => setEmail(text)}
                />
    
                <TextInputBox
                    placeholder={strings.telephone}
                    placeholderTextColor= {colors.white}
                />
    
                <TextInputBox
                    placeholder={strings.artisticName}
                    placeholderTextColor= {colors.white}
                />
            </View>
        )
    }

    function Etapa3 () {
        return (
            <View style={styles.inputsContainer}>
                <TextInputBox
                    placeholder={strings.postalCode}
                    placeholderTextColor= {colors.white}
                    // value={email}
                    // onChangeText={(text:string) => setEmail(text)}
                />
    
                <TextInputBox
                    placeholder={strings.street}
                    placeholderTextColor= {colors.white}
                />
    
                <TextInputBox
                    placeholder={strings.city}
                    placeholderTextColor= {colors.white}
                />
                
                <TextInputBox
                    placeholder={strings.block}
                    placeholderTextColor= {colors.white}
                />
                
                <TextInputBox
                    placeholder={strings.number}
                    placeholderTextColor= {colors.white}
                />
            </View>
        )
    }

    //precisei criar a referencia para setar a pagina
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any>();

    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)

    function estadoScroll (e:any) {
        let valorPage = e.nativeEvent.position 
        setPagee(valorPage)

        console.log(`numero da pagina: ${valorPage}`)  
    }

    const {navigate, goBack} = useNavigation();

    // function goBackScreen(){
    //     return goBack();
    // }

    function goToHome(){
        navigate('Signin');
    }

    function btnAvancaViewPager(){
        if(page>=2) {
            // viewPager.current.setPage(0)
            // viewPager.current.setPage(page)

            // Implementar a conclusão do cadastro
            
            goToHome();
        }else{
            viewPager.current.setPage(page+1)
        }          
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
                <ViewPager ref={viewPager} onPageSelected={estadoScroll} style={styles.viewPager} initialPage={page}
                    // scrollEnabled={true}
                    // onPageScroll={this.onPageScroll}
                    // onPageSelected={this.onPageSelected}
                    // onPageScrollStateChanged={this.onPageScrollStateChanged}
                    // pageMargin={10}
                    // Lib does not support dynamically orientation change
                    // orientation="horizontal"
                    // Lib does not support dynamically transitionStyle change
                    // transitionStyle="scroll"
                    // showPageIndicator={dotsVisible}
                    // ref={this.viewPager}~
                    >
                    <View key="1">
                        <Etapa1 />
                    </View>

                    <View key="2">        
                        <Etapa2 />
                    </View>

                    <ScrollView>
                        <View key="3">
                            <Etapa3 />
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