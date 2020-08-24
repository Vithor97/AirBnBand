import React from 'react'
import { TextInput } from 'react-native';
import colors from '../../resources/values/colors.json';

import styles from './styles';

function Signin ({ ...rest }) {
    return (
        <TextInput 
        { ...rest }
        style={styles.textInput}
        placeholderTextColor= {colors.white}
        />
    )
}
    
export default Signin;