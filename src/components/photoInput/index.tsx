import React from 'react';
import { Image, View, Text } from 'react-native';
import {BorderlessButton } from 'react-native-gesture-handler';

import strings from '../../resources/values/strings.json';

import styles from './styles';

function PhotoInput () {
    return (
        <>
            <View  style={styles.photoInputContainer}>
                <BorderlessButton style={styles.photoInputButton}>
                    <Image
                        source={require('../../resources/Icons/photo_laranja.png')}
                        style={styles.photoInputImageDefault}
                    />

                    {/* {function(){
                        if(!props.imageUri){
                            return <Image source={require('../../resources/Icons/photo_laranja.png')} 
                            style={styles.photoInputImageDefault}></Image>
                        }
                        else {
                            return <Image source={{uri: props.imageUri}} 
                            style={styles.photoInputImageSelected}></Image>
                        }
                    }()} */}
                </BorderlessButton>
            </View>
            
            <Text style={styles.photoInputText}>{strings.addImage}</Text>
        </>
    );
}

export default PhotoInput;