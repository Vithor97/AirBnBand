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

    hirerIconContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundAlternative
    },

    hirerIcon: {
        width: 50,
        height: 50,
        alignSelf: "flex-end"
    }
});

export default styles;