import { ScaleFromCenterAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import {StyleSheet } from 'react-native';
import { ceil, color } from 'react-native-reanimated';

import fonts from '../../resources/values/fonts.json';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    // paddingBottom: 10,

    display: "flex",
    alignItems: 'center',
    backgroundColor: colors.background
    // justifyContent: 'center',
  },

  header: {
    width: '90%',
    flexDirection: "row"
  },

  backArrowContainer:{
    width: '15%',
    marginBottom: 30,
  },

  scrollViewContainer: {
    width: "100%",
    // backgroundColor: colors.gmailRed
  },

  contentContainer: {
    width: '90%',
    // backgroundColor: colors.facebookBlue,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 30,
  },

  nameContainer:{
    width: '100%',
    // height: 40,
    // backgroundColor: colors.gmailRed,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
  },

  artistName: {
    fontSize: fonts.artistInfoNameSize,

    color: colors.primary,
    // color: colors.black,
    // color: colors.white,
    textShadowColor: colors.black,
    // textShadowColor: colors.primary,
    textShadowRadius: 0.5,
    // textShadowOffset: {
    //   width: 0.1,
    //   height: 0.1
    // },

    textTransform: "uppercase"
  },

  nameAvatarContainer: {
    width: '100%',
    alignItems: "center",
    marginBottom: 10,
  },

  avatarContainer: {
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

  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    // backgroundColor: colors.facebookBlue
  },

  contentLabelContainer: {
    marginBottom: 10,
    flexDirection: "row",
    // backgroundColor: colors.red,
    flexWrap: "wrap"
  },

  contentLabel: {
    fontSize: fonts.artistGeneralInfoTextSize,
    fontWeight: "bold"
    // marginBottom: 2,
  },
  
  contentText: {
    fontSize: fonts.artistGeneralInfoTextSize,
    // marginBottom: 2,
  },

  estadosContainer: {
    // maxWidth: 100,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,

    // backgroundColor: colors.facebookBlue
  },

  estadoContainer: {
    width: 50,

    borderRadius: 15,
    borderColor: colors.black,
    borderWidth: 0.1,

    fontSize: fonts.artistGeneralInfoTextSize,
    backgroundColor: colors.primary,
    marginRight: 5,
    marginBottom: 5,
    textAlign: "center",
    
    // color: colors.primary,
    // color: colors.black,
    color: colors.white,
    textShadowColor: colors.black,
    // textShadowColor: colors.primary,
    textShadowRadius: 0.2,
    // textShadowOffset: {
    //   width: 1,
    //   height: 1
    // },
  },

  socialMediaContainer: {
    flexDirection: "row",
    // alignSelf: "center",
    // backgroundColor: colors.black,
    alignItems: "center",
    // justifyContent: "center"

    marginBottom: 10
  },

  socialMediaIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5
  }
})

export default styles;