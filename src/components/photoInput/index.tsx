import React from 'react';
import { Image, View, Text } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';

import strings from '../../resources/values/strings.json';

import styles from './styles';

function BackArrow () {
    return (
        <>
            <View  style={styles.photoInputContainer}>
                <BorderlessButton style={styles.photoInputButton}>
                    <Image
                        source={require('../../resources/Icons/photo_laranja.png')}
                        style={styles.photoInputImage}
                    />
                </BorderlessButton>
            </View>
            
            <Text style={styles.photoInputText}>{strings.addImage}</Text>
        </>
    );
}

export default BackArrow;