import React, { useState } from 'react';
import { View, Image } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';

import Etapa1 from './etapa_1';
import Etapa2 from './etapa_2';
import Etapa3 from './etapa_3';

import styles from './styles';
import global from '../../styles/global';

function CadastroContratante () {
    // const Etapas = () => {
    //     return(
            
    //     );
    // }

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
            
            <ViewPager style={styles.viewPager} initialPage={0}
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

            <ProgressBallsContainer>
                <ProgressBallFilled />
                <ProgressBallEmpty />
            </ProgressBallsContainer>

            <NextArrowButton/>
        </View>
    );
}

export default CadastroContratante;