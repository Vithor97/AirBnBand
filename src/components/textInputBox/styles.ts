import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const styles = StyleSheet.create({  
  textInput: {
    height: 50,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 25,
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: 10,
    fontSize: fonts.textInputFontSize,
  },
})

export default styles;