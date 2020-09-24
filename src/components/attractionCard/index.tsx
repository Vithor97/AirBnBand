import React from 'react';
import { Image, View, Text } from 'react-native';
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
                <View style={styles.imageContainer}>
                    <View style={styles.atractionImageBallFormContainer}>
                        <Image
                            source={require('../../resources/Icons/photo_laranja.png')}
                            style={styles.atractionImage}
                        />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.attractionNameText}>Nome da atração</Text>
                    <Text >Estilo da atração</Text>
                </View>
            </BorderlessButton>
        </View>
    );
}

export default BackArrow;