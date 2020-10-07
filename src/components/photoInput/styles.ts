import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const photoInput = StyleSheet.create({  
  photoInputContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: "center",

    // backgroundColor: colors.gmailRed,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  photoInputButton: {
    width: 120,
    height: 120,
    borderRadius: 60,

    // backgroundColor: colors.gmailRed,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  photoInputImageDefault: {
    width: 80,
    height: 80,
    // backgroundColor: colors.facebookBlue
  },

  photoInputImageSelected: {
    width: 120,
    height: 120,
    borderRadius: 60,
    // backgroundColor: colors.facebookBlue
  },

  photoInputText:{
    color: colors.primary,
    alignSelf: "center"
  },
})

export default photoInput;