import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json'

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
      width: '100%',
      paddingTop: 30,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    containerTitulo:{
      // height: 80,
      width: '85%',
    },

    titulo: {
      width: '100%',
      alignContent: 'center',
      // top:-45,
      fontSize: fonts.appNameFontSize,
      fontFamily: 'sans-serif-medium',
      color: colors.primary
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
      fontSize: fonts.textInputFontSize,
    },

    formContainer: {
      paddingTop: 20,
      width: '75%',
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
      fontSize: fonts.buttonFontSize,
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

    socialMediaBox: {
      width: '100%',
      height: 50,
      display: "flex",
      justifyContent: "center",
      flexDirection: "row"
    },

    faceBook: {
      height: 50,
      //borderRadius: 25,
      width: 50,
      //backgroundColor: colors.facebookBlue,
      //marginRight: 20,
      //alignContent: "center"
    },

    gMail: {
      height: 50,
      //borderRadius: 25,
      width: 50,
      //backgroundColor: colors.gmailRed,
      //marginLeft: 9,
      //alignContent: "center"
    },

    orText: {
      color: colors.primary,
      fontFamily: 'sans-serif-medium',
      fontSize: fonts.floatingTextFontSize,
      alignSelf: 'center',
      marginBottom: 10
    },

    signupContainer: {
      // top: -40,
    },

    signupButtonText: {
      color: colors.primary,
      fontFamily: 'sans-serif-medium',
      fontSize: fonts.floatingTextFontSize,
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