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
    // width: '70%',
    // height: 40,
    // backgroundColor: colors.gmailRed,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
  },

  artistName: {
    fontSize: fonts.artistInfoNameSize
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

  contentText: {
    fontSize: fonts.artistGeneralInfoTextSize,
    // marginBottom: 2
  },

  contentLabelContainer: {
    marginBottom: 10,
  },

  estadosContainer: {
    flexDirection: "row",
  },

  instagramWhatsAppContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
})

export default styles;