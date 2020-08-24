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
})

export default styles;