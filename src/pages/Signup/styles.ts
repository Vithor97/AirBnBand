import {StyleSheet } from 'react-native';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
    textInput: {
        height: 50,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.primary,
        marginBottom: 6,
        fontSize: 20
    },
    formContainer: {
        padding: 20,
        width: '90%',
        top: 10,
    },
    lineStyle:{
        position: 'relative',
        borderBottomColor: colors.primary,
        borderBottomWidth: 4,
        width:'80%',
        top: 0
   },
   submitButton:{
        marginTop: 20,
        padding: 10,
        margin: 10,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 20,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
  submitButtonText: {
        color: colors.white,
        fontFamily: 'sans-serif-medium',
        fontSize: 25,
        marginLeft: 16,
        alignSelf: 'center'
    },
  backButtonText: {
    color: colors.primary,
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    marginLeft: 16,
    alignSelf: 'center',
    textDecorationLine: "underline"
  },
  signupContainer: {
    top: 60,
    width: '90%',
  },

  headerComponent:{
    position: 'relative',
    top: 1,
  },
  label: {
    position: 'relative',
    color: colors.primary,
    fontSize: 40
  }   
});


export default styles;