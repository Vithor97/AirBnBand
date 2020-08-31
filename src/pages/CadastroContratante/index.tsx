import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import BackArrow from '../../components/backArrow';
import DivisorBar from '../../components/divisorBar';
import TextInputBox from '../../components/textInputBox';

import styles from './styles';
import global from '../../styles/global';
import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';
import { useNavigation } from '@react-navigation/native';

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

            <View style={styles.contentContainer}>
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

                <TextInputBox
                    placeholder={strings.cpfcnpj}
                    placeholderTextColor= {colors.white}
                />

                <TextInputBox
                    placeholder={strings.telephone}
                    placeholderTextColor= {colors.white}
                />
            </View>
        </View>
    );
}

export default CadastroContratante;