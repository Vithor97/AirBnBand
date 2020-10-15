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

        width: "97%",
        alignSelf: "center"
    },

    bio: {
        bottom: 40,
        marginHorizontal: 10,
        // fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 14,
        // color: '#7D7D7D',
        color: colors.gray,
    },

    text_footer: {
        color: colors.placeHolderAlternative,
        // color: colors.gray,
        fontWeight: 'bold',
        fontSize: 13
    },

    action :{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        // borderBottomColor: colors.facebookBlue,
        paddingBottom: 5
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
        top: -65
    },

    infos:{
        alignSelf: "center",
        textAlign: "justify",
        bottom: 60,
    },

    bandNameStyle :{
        fontSize: 18,
        // marginBottom: -4,
        fontWeight: 'bold',
        alignSelf: "center"
    },

    musicalStyleStyle : {
        fontSize: 15,
        // left: 15
        alignSelf: "center"
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
})

export default styles;