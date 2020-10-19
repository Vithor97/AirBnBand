import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4E4E4'
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom:25
    },
    title: {
      fontSize: 24,
      fontWeight:'bold'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500'
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper : {
      borderBottomColor: '#989C98',
      borderBottomWidth: 1,
      borderTopColor: '#989C98',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100
    },
    infoBox: {
      width: '%50',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 7
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 45,
    }
})

export default styles;