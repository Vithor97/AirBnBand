import {StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      height: '100%',
      width: '100%',
      paddingTop: 150,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    containerTitulo:{
      // height: 80,
      width: '90%',
    },

    imageLogo: {
      height: 50,
      width: 50,
    },

    textInput: {
      height: 50,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: '#FD9A0B',
      margin: 5,
      fontSize: 20,
    },
    formContainer: {
      backgroundColor: '#FFF',
      padding: 20,
      width: '90%',
      top: -47,
    },
    titulo: {
      alignContent: 'center',
      top:-45,
      fontSize: 48,
      fontFamily: 'sans-serif-medium',
      color: '#FD9A0B',
    },
    submitButton:{
      marginTop: 20,
      padding: 10,
      margin: 10,
      height: 50,
      backgroundColor: '#FD9A0B',
      borderRadius: 20,
      width: '95%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#FFF',
      fontFamily: 'sans-serif-medium',
      fontSize: 25,
      marginLeft: 16,
      alignSelf: 'center'
    },
    signupContainer: {
      top: -40,
    },
    signupButtonText: {
      color: '#FD9A0B',
      fontFamily: 'sans-serif-medium',
      fontSize: 30,
      marginLeft: 16,
      alignSelf: 'center',
      textDecorationLine:"underline"
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