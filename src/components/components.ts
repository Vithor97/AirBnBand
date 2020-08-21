import {StyleSheet } from 'react-native'
import colors from '../resources/values/colors.json';
import fonts from '../resources/values/fonts.json';

const styles = StyleSheet.create({  
  headerContainer: {
    width: "90%",
    height: 50,
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: colors.secundary,
  },

  backArrowContainer: {
    width: 40,
    height: 40,
    // width: 50,
    // height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: "flex-start",

    display: "flex",
    // alignContent: "center",
    justifyContent: "center",
  },

  backArrow: {
    width: 25,
    height: 25,
    // width: 35,
    // height: 35,
    alignSelf: "center",
  },

  contentContainer: {
    width: "90%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // backgroundColor: colors.black
  },

  textInput: {
    height: 50,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: colors.primary,
    marginBottom: 10,
    fontSize: fonts.textInputFontSize,
  },

  divisorBar: {
    height: 5,
    borderRadius: 2.5,
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.primary,
    alignSelf: 'center'
  },

  defaultButton:{
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wavesContainer: {
    width: "100%",
    height: 150,
    // backgroundColor: colors.black,
  },

  waveFooter:{
    height: 150,
    marginLeft: -350,
    marginTop: -150,
    width: '200%',
  },

  waveFooterDark:{
    height: 150,
    marginLeft: 0,
    width: '100%',
  },
})

export default styles;