import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import Waves from '../../components/waves/waves';
import BackArrow from '../../components/backArrow';

import styles from './styles';
import global from '../../styles/global';
import strings from '../../resources/values/strings.json';
import { useNavigation } from '@react-navigation/native';

function Signup () {
    return (
        // <View style={styles.container}>
            <View style={global.headerContainer}>
                <BackArrow />
            </View>
        // </View>
    );
}

export default Signup;