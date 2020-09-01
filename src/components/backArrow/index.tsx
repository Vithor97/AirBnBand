import React from 'react';
import { Image, View } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backArrow from './styles';

function BackArrow () {
    const { goBack } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <View  style={backArrow.backArrowContainer}>
            <BorderlessButton style={backArrow.backArrowButton}  onPress={goBackScreen}>
                <Image
                    source={require('../../resources/Icons/seta_voltar_laranja.png')}
                    style={backArrow.backArrow}
                />
            </BorderlessButton>
        </View>
    );
}

export default BackArrow;