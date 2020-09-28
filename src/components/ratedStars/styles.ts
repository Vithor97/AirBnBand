import {StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const attractionCard = StyleSheet.create({  
  starsContainer: {
    // width: 120,
    height: 20,
    // alignSelf: "flex-end",
    alignSelf: "flex-start",

    // backgroundColor: colors.facebookBlue,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ratingText: {
    fontSize: fonts.attractionCardTypeText,

    marginRight: 5
  },

  ratingNumber: {
    fontSize: fonts.attractionCardTypeText,

    color: colors.primary,

    marginRight: 5
  },

  starImage: {
    width: 20,
    height: 20,
    // borderRadius: 30,
  },
})

export default attractionCard;