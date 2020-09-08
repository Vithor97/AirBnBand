import React from 'react';
import { View } from 'react-native';

import TextInputBox from '../../components/textInputBox';
import NextArrowButton from '../../components/nextArrowButton';
import { ProgressBallsContainer, ProgressBallFilled, ProgressBallEmpty } from '../../components/progressBalls';

import styles from './styles';
import strings from '../../resources/values/strings.json';
import colors from '../../resources/values/colors.json';

function Etapa1 () {
    return (
        <View style={styles.contentContainer}>
            <TextInputBox
                placeholder={strings.fullName}
                placeholderTextColor= {colors.white}
                // value={email}
                // onChangeText={(text:string) => setEmail(text)}
            />

            <TextInputBox
                placeholder={strings.email}
                placeholderTextColor= {colors.white}
            />

            <TextInputBox
                placeholder={strings.password}
                placeholderTextColor= {colors.white}
            />

            <TextInputBox
                placeholder={strings.retypePassword}
                placeholderTextColor= {colors.white}
            />

            <ProgressBallsContainer>
                <ProgressBallFilled />
                <ProgressBallEmpty />
            </ProgressBallsContainer>

            <NextArrowButton/>
        </View>
    )
}

export default Etapa1;