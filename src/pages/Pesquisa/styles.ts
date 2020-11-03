import {StyleSheet } from 'react-native';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      paddingTop: 30,
  
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchBarContainer:{
      width: '90%',
      height: 60,
      backgroundColor: colors.primary,
      borderRadius: 30,
      flexDirection: "row"
    },

    searchBar: {
      width: 60,
      height: 60,
      flex: 1,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      // backgroundColor: colors.gmailRed,

      paddingLeft: 30,

      justifyContent: "center"
    },

    searchBarTextInput:{
      height: 50,
      color: colors.white,
      fontSize: 24
      // backgroundColor: colors.black
    },

    searchIconContainer:{
      width: 60,
      height: 60,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      // backgroundColor: colors.primaryDark,

      justifyContent: "center",
      alignItems: "center"
    },

    searchIcon: {
      height: 45,
      width: 45,
      // backgroundColor: colors.white
    },
})

export default styles;