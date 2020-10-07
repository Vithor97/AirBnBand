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
      // justifyContent: 'center',
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