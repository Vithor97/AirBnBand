import {Platform, StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';
import fonts from '../../resources/values/fonts.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {

        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30

    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },

    text_footer: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 13
    },
    action :{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0  : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },

    signup: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    textSignUp: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 50,
      backgroundColor: '#eee', 
      alignSelf: "center",
      right: 7,
      top: -65
  },
  infos:{
    alignSelf: "center",
    textAlign: "justify",
    bottom: 60,
  },
  NameBand :{
    fontSize: 18,
    marginBottom: -4,
    fontWeight: 'bold'
  },
  musicalStule: {
    fontSize: 15,
    left: 15
  },

  bio: {
    bottom: 40,
    marginHorizontal: 10,
    // fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 14,
    color: '#7D7D7D',
  },

})

export default styles;