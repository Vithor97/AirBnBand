import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

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
    backgroundColor:colors.secundary,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  confirmaBtnImage: {
    width: 100,
    height: 50,
  }
})

export default confirmaBtn;