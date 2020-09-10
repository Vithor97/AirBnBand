import React, { useState, useRef } from 'react';
import { View, Image } from 'react-native';
import ViewPager  from '@react-native-community/viewpager';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';

import Etapa1 from './etapa_1';
import Etapa2 from './etapa_2';
import Etapa3 from './etapa_3';

import styles from './styles';
import global from '../../styles/global';
import { RectButton } from 'react-native-gesture-handler';

function CadastroContratante () {

    //precisei criar a referencia para setar a pagina
    const viewPager  = useRef<ViewPager | null | HTMLInputElement | any >();

    //Seta as paginas onde estou
    let [page, setPagee] = useState(0)

    function estadoScroll (e:any) {
        let valorPage = e.nativeEvent.position 
        setPagee(valorPage)

        console.log(`numero da pagina: ${valorPage}`)  
    }

    function btnAvancaViewPager(){
        if(page>=2) {
            viewPager.current.setPage(0)
            // viewPager.current.setPage(page)

            // Implementar a conclusão do cadastro

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

                    <View key="3">
                        <Etapa3 />
                    </View>
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

export default CadastroContratante;