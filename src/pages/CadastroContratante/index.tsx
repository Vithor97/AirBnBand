import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';

import styles from './styles';
import global from '../../styles/global';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';

function CadastroContratante () {
    return (
        <View style={styles.container}>
            <View style={global.headerContainer}>
                {/* <View style={global.headerContainer}> */}
                <View style={styles.hirerIconContainer}>
                    <BackArrow />

                    {/* <View style={styles.hirerIconContainer}> */}
                        <Image source={require('../../resources/Icons/acordo_laranja.png')} style={styles.hirerIcon} />
                    {/* </View> */}

                    {/* <View></View> */}
                </View>
                
                {/* <View style={global.contentContainer}>
                    <DivisorBar />
                </View> */}
            </View>
        </View>
    );
}

export default CadastroContratante;