import React from 'react'
import { Image, View } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

//Quando recebo props de outros components, no TS eu precio tipar a função
const NextArrowButton: React.FC<any> = ({ onNext }) => {
    return (
        <View style={styles.nextArrowButtonContainer}>
            <RectButton onPress={onNext} 
                    style={styles.nextArrowButton}
                    >
                <Image
                    source={require('../../resources/Icons/seta_direita_laranja.png')}
                    style={styles.nextArrowButtonImage}
                />
            </RectButton>
        </View>
    );
}
    
export default NextArrowButton;