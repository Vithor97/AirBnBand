import {StyleSheet } from 'react-native'
import colors from '../values/colors.json';

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 25,
        backgroundColor: colors.primary,
        marginBottom: 10,
        fontSize: 20,
      },

      divisorBar: {
        height: 5,
        borderRadius: 2.5,
        width: '95%',
        marginBottom: 10,
        backgroundColor: colors.primary,
        alignSelf: 'center'
      },

      defaultButton:{
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default styles;