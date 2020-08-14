import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      height: '100%',
      width: '100%',
      paddingTop: 50,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    containerTitulo:{
      // height: 80,
      width: '85%',
    },

    imageLogo: {
      height: 50,
      width: 50,
    },

    textInput: {
      height: 50,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 25,
      backgroundColor: colors.primary,
      marginBottom: 10,
      fontSize: 20,
    },
    formContainer: {
      paddingTop: 20,
      width: '75%',
    },
    titulo: {
      width: '100%',
      alignContent: 'center',
      // top:-45,
      fontSize: 45,
      fontFamily: 'sans-serif-medium',
      color: colors.primary
    },
    submitButton:{
      marginTop: 20,
      // padding: 10,
      marginBottom: 10,
      height: 50,
      backgroundColor: colors.primary,
      borderRadius: 25,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitButtonText: {
      color: colors.white,
      fontFamily: 'sans-serif-medium',
      fontSize: 25,
      textAlign: 'center',
      alignSelf: 'center'
    },

    divisorBar: {
      height: 5,
      borderRadius: 2.5,
      width: '95%',
      marginBottom: 10,
      backgroundColor: colors.primary,
      alignSelf: 'center'
    },

    orText: {
      color: colors.primary,
      fontFamily: 'sans-serif-medium',
      fontSize: 26,
      alignSelf: 'center',
      marginBottom: 10
    },

    signupContainer: {
      // top: -40,
    },

    signupButtonText: {
      color: colors.primary,
      fontFamily: 'sans-serif-medium',
      fontSize: 30,
      alignSelf: 'center',
    },
    
    imageFooter:{
      height: 200,
      marginLeft: -350,
      marginTop: -200,
      width: '200%',
    },

    imageFooterDark:{
      height: 200,
      marginLeft: 0,
      width: '100%',
    },
});


export default styles;