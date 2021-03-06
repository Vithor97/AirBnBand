import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const backArrow = StyleSheet.create({  
  backArrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: "flex-start",

    // backgroundColor: colors.gmailRed,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  backArrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,

    // backgroundColor: colors.gmailRed,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  backArrow: {
    width: 25,
    height: 25,
  },
})

export default backArrow;