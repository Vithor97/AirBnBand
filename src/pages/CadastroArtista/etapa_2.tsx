import React from 'react';
import { View } from 'react-native';

import TextInputBox from '../../components/textInputBox';
import PhotoInput from '../../components/photoInput';

import styles from './styles';
import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

function Etapa1 () {
    return (
        <View style={styles.inputsContainer}>
            <TextInputBox
                placeholder={strings.cpfcnpj}
                placeholderTextColor= {colors.white}
                // value={email}
                // onChangeText={(text:string) => setEmail(text)}
            />

            <TextInputBox
                placeholder={strings.telephone}
                placeholderTextColor= {colors.white}
            />

            <TextInputBox
                placeholder={strings.artisticName}
                placeholderTextColor= {colors.white}
            />

            <PhotoInput />
        </View>
    )
}

export default Etapa1;