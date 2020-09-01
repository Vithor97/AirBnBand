import React from 'react'
import { Image, Button, View } from 'react-native';
import colors from '../../resources/values/colors.json';

import styles from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function NextArrowButton ({ ...rest }) {
    const { goBack } = useNavigation();

    function goBackScreen(){
        return goBack();
    }

    return (
        <View style={styles.nextArrowButtonContainer}>
            <RectButton onPress={goBackScreen}>
                <Image
                    source={require('../../resources/Icons/seta_esquerda_laranja.png')}
                    style={styles.nextArrowButton}
                />
            </RectButton>
        </View>
    );
}
    
export default NextArrowButton;