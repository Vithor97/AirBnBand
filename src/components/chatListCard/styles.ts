import {StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const attractionCard = StyleSheet.create({  
  attractionCardContainer: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderColor: colors.primary,
    alignSelf: "center",
    marginBottom: 0.1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  attractionCardButton: {
    width: "100%",
    height: "100%",
    borderRadius: 10,

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
    width:40,
    height: 40,
    borderRadius: 30,
    borderColor: colors.primary,
    borderWidth: 2,
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  atractionImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },

  infoContainer:{
    height: "10%",
    width: "70%",
    alignContent: "center"
  },

  attractionNameText: {
    fontSize: fonts.attractionCardNameText,
    fontWeight: "bold",

  },

  attractionTypeText: {
    fontSize: 13,
    width:180
  },

  attractionAnotherText: {
    fontSize: fonts.attractionCardTypeText,

    alignSelf: "flex-end"
  },
  title: {
    fontSize: 15,
    top: -10,
    fontWeight: "bold",
    width: 130,
    right: 44
  },
  lastMessage: {
    fontSize: 13,
    width: 250,
    right: 44
  },
  lines: {
      display: 'flex',
      flexDirection: 'row',
  },
  chatListItemLine: {
    flex: 1,
    justifyContent:'flex-start',
    flexDirection: 'column',
},
})

export default attractionCard;