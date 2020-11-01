import {Platform, StyleSheet } from 'react-native';
import { ProgressBallEmpty } from '../../components/progressBalls';
import colors from '../../resources/values/colors.json';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.white
  },

  containerScrollView: {
    margin:10,
  },

  formContainer: {
    // margin: 7,
    width: "95%",
    alignSelf: "center"
  },

  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },

  profileImage: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    display: "flex",
    // alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },

  imageSelectIconContainer: {
    width: 40,
    height: 40,
    opacity: 0.7,
    display: "flex",
    alignItems: 'center',
    alignContent: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    // backgroundColor: colors.black,
  },

  imageSelectIcon: {
    color: colors.white,
  },

  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "center",
    marginBottom: 10
  },

  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.gmailRed,
    alignItems: 'center',
    marginTop: 10
  },

  panel: {
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },

  panelHeader: {
    alignItems: 'center'
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10, 
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput : {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a', 
  },
  textTypeTitle: {
    left: '40%', fontSize: 15, fontWeight: 'bold'
  },
  textInputTitle: {
    fontWeight: 'bold'
  }
})

export default styles;