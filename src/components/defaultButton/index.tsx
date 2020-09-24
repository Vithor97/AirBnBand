import React from 'react'
import { Image, View, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

//Quando recebo props de outros components, no TS eu precio tipar a função
const NextArrowButton: React.FC<any> = ({ doIt, text, ...rest }) => {
    return (
        <View style={styles.defaultButtonContainer} {...rest}>
            <RectButton onPress={doIt} style={styles.defaultButton}>
                <Text style={styles.defaultButtonText}> {text} </Text>
            </RectButton>
        </View>
    );
}
    
export default NextArrowButton;