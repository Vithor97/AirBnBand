import {StyleSheet } from 'react-native';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    backgroundColor: colors.white,

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  registerText: {
    color: colors.primary,
    fontSize: 40,
    marginBottom: 10,
  },

  optionContainer: {
    width: "100%",
    // height: 100,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,

    marginBottom: 10,

    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  optionIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: "center"
  },

  optionText: {
    color: colors.primary,
    // backgroundColor: colors.black,
    fontSize: 40,
    alignSelf: "center",
  },
});

export default styles;