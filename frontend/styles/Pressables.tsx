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
        backgroundColor: "#353766",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 45,
        elevation: 2,
        shadowColor: "#1E1E28",
        right: 0,
        // shadowProp: borderShadow
    },
})
