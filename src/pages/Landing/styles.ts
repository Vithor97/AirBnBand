import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      width: '100%',
      height: '100%',
      paddingTop: 30,
  
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchBarContainer:{
      width: '90%',
      backgroundColor: colors.background,
      borderRadius: 30,
      flexDirection: "row",
      padding: 0,
      borderWidth: 2,
      borderColor: colors.primary
    },

    searchBar: {
      // width: 60,
      height: 50,
      flex: 1,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
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