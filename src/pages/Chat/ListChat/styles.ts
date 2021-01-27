import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      },
      lines: {
          display: 'flex',
          flexDirection: 'row',
      },
      chatListItemLine: {
        flex: 1,
        justifyContent:'space-between',
        flexDirection: 'column',
        left: 50
    }
})

export default styles;