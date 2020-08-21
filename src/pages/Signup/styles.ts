import {StyleSheet } from 'react-native';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    backgroundColor: colors.white,

    display: "flex",
    alignItems: 'center',
    // justifyContent: 'center',
  },

  registerText: {
    color: colors.primary,
    fontSize: fonts.titleFontSize,
    marginTop: 10,
    marginBottom: 30,
  },

  optionContainer: {
    width: "90%",
    // height: 100,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,

    marginBottom: 10,
    alignSelf: "center",

    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  optionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    alignSelf: "center"
  },

  optionText: {
    color: colors.primary,
    // backgroundColor: colors.black,
    fontSize: fonts.titleFontSize,
    alignSelf: "center",
  },
});

export default styles;