import {StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const attractionCard = StyleSheet.create({  
  attractionCardContainer: {
    width: "85%",
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderColor: colors.secundary,
    alignSelf: "center",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  attractionCardButton: {
    width: "100%",
    height: "100%",
    borderRadius: 10,

    // backgroundColor: colors.gmailRed,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  imageContainer:{
    height: "100%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: colors.facebookBlue
  },

  atractionImageBallFormContainer:{
    width:60,
    height: 60,
    borderRadius: 30,
    borderColor: colors.primary,
    borderWidth: 2,
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  atractionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  infoContainer:{
    height: "100%",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,

    // backgroundColor: colors.gmailRed
  },

  attractionNameText: {
    fontSize: fonts.attractionCardNameText,
    fontWeight: "bold",

    // backgroundColor: colors.facebookBlue,

    marginBottom: 5,
  },

  attractionTypeText: {
    fontSize: fonts.attractionCardTypeText,
    
    marginBottom: 5
  },

  attractionAnotherText: {
    fontSize: fonts.attractionCardTypeText,

    alignSelf: "flex-end"
  }
})

export default attractionCard;