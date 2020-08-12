import {StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD9A0B',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textInput: {
        height: 50,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
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
        borderBottomColor: 'white',
        borderBottomWidth: 4,
        width:'80%',
        top: 0
   },
   submitButton:{
        marginTop: 20,
        padding: 10,
        margin: 10,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
  submitButtonText: {
        color: '#FD9A0B',
        fontFamily: 'sans-serif-medium',
        fontSize: 25,
        marginLeft: 16,
        alignSelf: 'center'
    },
  backButtonText: {
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    marginLeft: 16,
    alignSelf: 'center',
    textDecorationLine: "underline"
  },
  signupContainer: {
    top: 60,
  },

  headerComponent:{
    position: 'relative',
    top: 1,
  },
  label: {
    position: 'relative',
    color: '#FFF',
    fontSize: 25
  }   
});


export default styles;