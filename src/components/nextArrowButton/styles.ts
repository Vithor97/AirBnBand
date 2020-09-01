import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const nextArrowButton = StyleSheet.create({  
  nextArrowButtonContainer: {
    width: "70%",
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    // backgroundColor: colors.black,
    alignSelf: "center",

    display: "flex",
    justifyContent: "center",
  },

  nextArrowButton: {
    width: 100,
    height: 60,
    borderColor: colors.secundary,
    alignSelf: "center",
    // backgroundColor:colors.secundary
  },
})

export default nextArrowButton;