import { StyleSheet } from "react-native";

const borderShadow = {
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: {
        width: 0, height: 2
    },
    shadowOpacity: 1
}

export const pressables = StyleSheet.create({
    iconButton: {
        height: 45,
        aspectRatio: 1,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 45,
        elevation: 2,
        shadowColor: "#c4c4c4"
        // shadowProp: borderShadow
    },
})
