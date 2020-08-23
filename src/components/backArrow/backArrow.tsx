import React from 'react';
import { Image } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backArrow from './styles';

function BackArrow () {
    const { goBack } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <>
            <BorderlessButton style={backArrow.backArrowContainer}  onPress={goBackScreen}>
                <Image
                    source={require('../../resources/Icons/seta_voltar_laranja.png')}
                    style={backArrow.backArrow}
                />
            </BorderlessButton>
        </>
    );
}

export default BackArrow;