import React from 'react';
import { Image, View, Text } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import strings from '../../resources/values/strings.json';

import backArrow from './styles';

function BackArrow () {
    const { goBack } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <>
            <View  style={backArrow.photoInputContainer}>
                <BorderlessButton style={backArrow.photoInputButton}  onPress={goBackScreen}>
                    <Image
                        source={require('../../resources/Icons/photo_laranja.png')}
                        style={backArrow.photoInputImage}
                    />
                </BorderlessButton>
            </View>
            
            <Text style={backArrow.photoInputText}>{strings.addImage}</Text>
        </>
    );
}

export default BackArrow;