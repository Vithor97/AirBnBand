import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const backArrow = StyleSheet.create({  
  backArrowContainer: {
    width: 40,
    height: 40,
    // width: 50,
    // height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: "flex-start",

    display: "flex",
    // alignContent: "center",
    justifyContent: "center",
  },

  backArrow: {
    width: 25,
    height: 25,
    // width: 35,
    // height: 35,
    alignSelf: "center",
  },
})

export default backArrow;