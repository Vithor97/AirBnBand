import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

//Quando recebo props de outros components, no TS eu precio tipar a função
const ConfirmaBtn: React.FC<any> = ({ onNext }) => {
    return (
        <View style={styles.confirmaBtnContainer}>
            <RectButton onPress={onNext} 
                    style={styles.confirmaBtn}
                    >
             <Text style={styles.confirmaBtnText}>Confirma</Text>
            </RectButton>
        </View>
    );
}

export default ConfirmaBtn;