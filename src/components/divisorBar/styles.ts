import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const divisorBar = StyleSheet.create({
    divisorBar: {
        height: 5,
        borderRadius: 2.5,
        width: '95%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.primary,
        alignSelf: 'center'
      },
})

export default divisorBar;