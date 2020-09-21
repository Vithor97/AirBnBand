import {StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        paddingTop: 30,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    backArrowContainer: {
        width: "20%"
    },

    hirerIconContainer: {
        width: "60%",
        // display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: colors.backgroundAlternative
    },

    hirerIcon: {
        width: 50,
        height: 50,
        // alignSelf: "flex-end"
    },

    divisorContainer: {
        width: "90%"
    },

    contentContainer: {
        width: "100%",
        // width: "100%",
        height: "100%",
        // marginTop: 20,
        paddingTop: 10,

        // backgroundColor: colors.facebookBlue,

        // flex: 1,
        // flexWrap: "wrap",
        alignSelf: "center",
        // justifyContent: "space-evenly",
        display: "flex"
    },

    viewPager: {
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        flex: 1,
        // minHeight: "45%",
        // height: "auto",
        // flexWrap: "wrap",
        width: "100%",
        // backgroundColor: colors.secundary
    },

    inputsContainer:{
        width: "85%",
        alignSelf: "center",
        // height: "33%",
        // flex: 1,
        // backgroundColor: colors.black
    },
    
    flowContainer: {
        width: "100%",
        // flex: 1,
        height: "35%",
        display: "flex"
    },

    addYourData: {
        marginBottom: 10,
        fontSize: fonts.titleFontSize,
        color: colors.primary,
    //   backgroundColor: colors.black
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
});

export default styles;