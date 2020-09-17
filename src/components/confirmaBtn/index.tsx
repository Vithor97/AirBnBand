import React from 'react'
import { Image, Button, View, Text } from 'react-native';
import colors from '../../resources/values/colors.json';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


//Quando recebo props de outros components, no TS eu precio tipar a função
const ConfirmaBtn: React.FC<any> = ({ onNext }) => {
    return (
        <View style={styles.confirmaBtn}>
            <RectButton onPress={onNext} 
                    style={styles.confirmaBtn}
                    >
             <Text>Confirma</Text>
            </RectButton>
        </View>
    );
}
    
export default ConfirmaBtn;