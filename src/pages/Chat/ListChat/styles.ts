import { StyleSheet } from 'react-native';
import colors from '../../../resources/values/colors.json';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      width: '100%',
      height: '100%',
      paddingTop: 80,
  
      display: "flex",
      alignItems: 'center',
      },
      item: {
        flex: 0,
        padding: 20,
        borderWidth:1,
        borderBottomColor: 'black',
        borderTopColor: 'black'
      },
      title: {
        fontSize: 15,
        top: -10,
        fontWeight: "bold",
        width: 130,
        right: 44
      },
      lastMessage: {
        fontSize: 13,
        width: 250,
        right: 44
      },
      lines: {
          display: 'flex',
          flexDirection: 'row',
      },
      chatListItemLine: {
        flex: 1,
        justifyContent:'flex-start',
        flexDirection: 'column',
    },
    atractionImageBallFormContainer:{
      width:35,
      height: 35,
      borderRadius: 30,
      borderColor: colors.primary,
      borderWidth: 2,
      
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    
  atractionImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  
  attractionCardsContainer: {
    width: "100%",
    // marginBottom: 10,
    paddingTop: 10,
  },
})

export default styles;