import React from 'react';
import { Image, View } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function BackArrow () {
    const { goBack } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <View  style={styles.attractionCardContainer}>
            <BorderlessButton style={styles.attractionCardButton}  onPress={goBackScreen}>
                <Image
                    source={require('../../resources/Icons/seta_voltar_laranja.png')}
                    style={styles.backArrow}
                />
            </BorderlessButton>
        </View>
    );
}

export default BackArrow;