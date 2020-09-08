import React, { useState } from 'react';
import { View, Image } from 'react-native';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';

import Etapa1 from './etapa_1';
import Etapa2 from './etapa_2';
import Etapa3 from './etapa_3';

import styles from './styles';
import global from '../../styles/global';

function CadastroContratante () {
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

            <Etapa3 />
        </View>
    );
}

export default CadastroContratante;