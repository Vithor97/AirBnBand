import {StyleSheet } from 'react-native'
import colors from '../../resources/values/colors.json';

const progressBalls = StyleSheet.create({  
  progressBallsContainer: {
    width: "50%",
    height: 30,
    // borderRadius: 30,

    marginTop: 10,
    marginBottom: 10,

    // borderWidth: 5,
    // borderColor: colors.secundary,
    // backgroundColor: colors.black,
    alignSelf: "center",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  progressBallFilled: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: colors.primary
  },

  progressBallEmpty: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    // backgroundColor:colors.secundary,
    borderWidth: 2,
    borderColor: colors.primary
  },
})

export default progressBalls;