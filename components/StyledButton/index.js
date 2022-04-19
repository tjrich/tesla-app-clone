import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from "./styles"

const StyleButton = (props) => {
    const {type, content, onPress} = props
    const colors = {
        "white": "#FFFFFF",
        "black": "#171A20CC"
    }

    const backgroundColor = type === "primary" ? colors.black : colors.white
    const textColor = type === "primary" ? colors.white : colors.black

    return (
    <View style={styles.container}>
        <Pressable
        style={[styles.button, {backgroundColor:backgroundColor}]}
        // onPress={() => onPress()}
        >
            <Text style={[styles.text, {color: textColor}]}>
                {content}
            </Text>
        </Pressable>
    </View>
    )
}

export default StyleButton