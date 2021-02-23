import {Platform, StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },

    header: {
        // flex: 0.5,
        // flex: 1,
        height: "22%",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 25,

        // paddingBottom: 25
    },

    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },

    footer: {
        // flex: 2,
        height: "78%",
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        
        width: "97%",
        alignSelf: "center"
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0  : -12,
        paddingLeft: 10,
        color: "#05375a"
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        //   backgroundColor: '#eee', 
        alignSelf: "center",
        //   right: 7,
        top: -65,

        // backgroundColor: colors.black
    },

    centralizedInfoContainer:{
        alignSelf: "center",
        alignItems: "center",
        textAlign: "justify",

        marginTop: -60,
        marginBottom: 10,
        
        // bottom: 60,
        // backgroundColor: colors.gmailRed
    },

    bandNameStyle :{
        fontSize: 18,
        // marginBottom: -4,
        fontWeight: 'bold',
        // alignSelf: "center"
    },

    musicalStyleStyle : {
        fontSize: 15,
        // left: 15
        // alignSelf: "center"
    },

    infoContainer: {
        // backgroundColor: colors.black,
        justifyContent: "space-between"
    },

    infoTextContainer: {
        // bottom: 40,
        // marginHorizontal: 10,
        // backgroundColor: colors.facebookBlue,
        marginBottom: 10,

        flexDirection: "row",
        flexWrap: "wrap"

        // justifyContent: "center"
    },

    infoLabel: {
        fontSize: fonts.artistGeneralInfoTextSize,
        lineHeight: fonts.artistGeneralInfoTextSize,
        color: colors.black,

        fontWeight: "bold"
    },

    infoText: {
        // fontFamily: 'Poppins_400Regular',
        // fontSize: 14,
        fontSize: fonts.artistGeneralInfoTextSize,
        lineHeight: fonts.artistGeneralInfoTextSize,
        // color: '#7D7D7D',
        color: colors.gray,
    },

    infoEstadoTextContainer: {
        width: 50,

        borderRadius: 15,
        borderColor: colors.black,
        borderWidth: 0.1,

        fontSize: fonts.artistGeneralInfoTextSize,
        backgroundColor: colors.primary,
        marginRight: 5,
        marginBottom: 5,
        textAlign: "center",
        
        color: colors.white,
        textShadowColor: colors.black,
        textShadowRadius: 0.2,
    },

    // button: {
    //     alignItems: 'center',
    //     marginTop: 50,
    // },

    // signup: {
    //     width: '100%',
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10,
    //     marginBottom: 10
    // },

    // textSignUp: {
    //     fontSize: 15,
    //     fontWeight: 'bold'
    // },
    
    // text_footer: {
    //     color: colors.placeHolderAlternative,
    //     // color: colors.gray,
    //     fontWeight: 'bold',
    //     fontSize: 13
    // },

    // action :{
    //     flexDirection: 'row',
    //     marginTop: 10,
    //     borderBottomWidth: 1,
    //     // borderBottomColor: '#f2f2f2',
    //     // borderBottomColor: colors.facebookBlue,
    //     paddingBottom: 5
    // },
})

export default styles;