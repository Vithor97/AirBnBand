import {StyleSheet } from 'react-native'
import { ceil } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const confirmaBtn = StyleSheet.create({  
  confirmaBtnContainer: {
    width: "70%",
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    // backgroundColor: colors.gmailRed,
    alignSelf: "center",

    display: "flex",
    justifyContent: "center",
  },

  confirmaBtn: {
    width: "100%",
    height: 60,
    borderColor: colors.secundary,
    alignSelf: "center",
    // backgroundColor:colors.secundary,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  confirmaBtnText: {
    height: 50,
    fontSize: fonts.titleFontSize,
    color: colors.primary,

    alignSelf: "center"
  }
})

export default confirmaBtn;