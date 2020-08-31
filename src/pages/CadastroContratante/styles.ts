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

    backArrowContainer: {
        width: "20%"
    },

    hirerIconContainer: {
        width: "60%",
        // display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: colors.backgroundAlternative
    },

    hirerIcon: {
        width: 50,
        height: 50,
        // alignSelf: "flex-end"
    },

    divisorContainer: {
        width: "90%"
    },

    contentContainer: {
        width: "90%",
        marginTop: 20,
        flex: 1
    }
});

export default styles;