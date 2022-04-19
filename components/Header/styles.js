import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        top: 40,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});

export default styles