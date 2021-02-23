import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      width: '100%',
      height: '100%',
      paddingTop: 100,
  
      display: "flex",
      alignItems: 'center',
      // justifyContent: 'center',
    },

    searchContainer:{
      marginTop: 30,

      position: "absolute",
      zIndex: 999,
      width: '90%',
      backgroundColor: colors.background,
      borderRadius: 25,
      borderWidth: 2,
      padding: 1,
      borderColor: colors.primary
    },

    searchBarContainer:{
      width: '100%',
      // backgroundColor: colors.background,
      borderRadius: 25,
      flexDirection: "row",
      // padding: 0,
      // borderWidth: 2,
      // borderColor: colors.primary
    },

    searchBar: {
      // width: 60,
      height: 50,
      flex: 1,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      // backgroundColor: colors.gmailRed,

      paddingLeft: 30,

      justifyContent: "center"
    },

    searchBarTextInput:{
      height: 50,
      color: colors.black,
      fontSize: 24
      // backgroundColor: colors.black
    },

    searchIconContainer:{
      width: 70,
      height: 50,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      // backgroundColor: colors.primaryDark,
      margin: 0,

      justifyContent: "center",
      alignItems: "center"
    },

    searchIcon: {
      height: 40,
      width: 40,
      // backgroundColor: colors.primary
    },

    separationBar:{
      width: "85%",
      height: 2,
      alignSelf: "center",
      marginTop: 4,
      marginBottom: 4,

      borderRadius: 1,
      backgroundColor: colors.primary
    },

    suggestionsContainer:{
      width: "100%",
      maxHeight: 360,
    },

    suggestionCard:{
      width: "100%",
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      // backgroundColor: colors.primary,

    },

    suggestionIconContainer: {
      width: 70,

      // backgroundColor: colors.primary,

      justifyContent: "center",
      alignItems: "center"
    },

    suggestionIcon:{
      height: 45,
      width: 45,

      borderRadius: 25,
      borderWidth: 0.5,
      borderColor: colors.primary,

      // backgroundColor: colors.primary,
    },

    suggestionNameContainer:{
      flex: 1,
      height: "100%",
      // alignItems: "center",
      justifyContent: "center",

      // backgroundColor: colors.facebookBlue
    },

    suggestionName: {
      fontSize: fonts.textInputFontSize
    },

    titulo: {
      alignContent: 'center',
      // backgroundColor: colors.facebookBlue,
      fontSize: fonts.appNameFontSize,
      fontFamily: 'sans-serif-medium',
      color: colors.primary,
    },

    attractionCardsContainer: {
      width: "100%",
      // marginBottom: 10,
      paddingTop: 10,
    },
});

export default styles;