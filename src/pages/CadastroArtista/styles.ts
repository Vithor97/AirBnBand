import {StyleSheet } from 'react-native';
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
        width: "85%",
        // width: "100%",
        // height: "100%",
        // marginTop: 20,
        paddingTop: 20,

        backgroundColor: colors.facebookBlue,

        flex: 1,
        alignSelf: "center",
        display: "flex"
    },

    viewPager: {
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        flex: 1,
        width: "100%",
        backgroundColor: colors.secundary
    },

    nextArrowButtonContainer: {
        width: "70%",
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.primary,
        // backgroundColor: colors.black,
        alignSelf: "center",
    
        display: "flex",
        justifyContent: "center",
      },
    
      nextArrowButton: {
        width: "100%",
        height: 60,
        borderColor: colors.secundary,
        alignSelf: "center",
        // backgroundColor:colors.secundary
    
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
    
      nextArrowButtonImage: {
        width: 100,
        height: 50,
      }
});

export default styles;