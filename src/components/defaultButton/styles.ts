import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const defaultButton = StyleSheet.create({
  defaultButtonContainer:{
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  
  defaultButton:{
    height: 50,
    width: "100%",
    // backgroundColor: colors.facebookBlue,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },

  defaultButtonText: {
    color: colors.primary,
    fontFamily: 'sans-serif-medium',
    fontSize: fonts.buttonFontSize,
    textAlign: 'center',
    // alignSelf: 'center'
  }
})

export default defaultButton;