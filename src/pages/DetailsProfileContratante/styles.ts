import {StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E4E4E4',
    backgroundColor: colors.white ,
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom:25
  },

  perfilContainer: {
    flexDirection:'row',
    marginTop: 15,
    // backgroundColor: colors.facebookBlue
  },

  perfilAvatar: {
    width: 80,
    height: 80,
    borderRadius: 45,
  },

  perfilInfoContainer: {
    marginLeft: 20
  },

  perfilName: {
    fontSize: 24,
    fontWeight:'bold',
    marginTop: 15 ,
    marginBottom: 5
  },

  perfilCaption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500'
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  infoIconContainer:{
    // width: 20,
    // height: 20,
    // color: "#777777"
    color: colors.primary
  },

  iconText:{
    // color: "#777777",
    color: colors.gray,
    marginLeft: 15
  },

  infoBoxWrapper : {
    // borderBottomColor: '#989C98',
    // borderBottomWidth: 1,
    // borderTopColor: '#989C98',
    // borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },

  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuWrapper: {
    // height: "100%",
    // marginTop: 7,
    // borderBottomColor: '#989C98',
    // borderTopColor: '#989C98',
    // borderTopWidth: 3,
    display: "flex",
    // flexDirection: "row",
    // alignItems: "flex-end",
    // backgroundColor: colors.gmailRed
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  optionIconContainer: {
    color: colors.primary,
    // color: colors.gmailRed,
  },

  menuItemText: {
    color: colors.gray,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})

export default styles;