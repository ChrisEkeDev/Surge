import { StyleSheet } from "react-native";

// INPUTS
export const inputs = StyleSheet.create({
    inputContainer: {
        width: "100%",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "rgba(255,255,255,.10)",
        borderWidth: 1,
        marginVertical: 12,
        borderRadius: 5
        // borderBottomColor: "rgba(255,255,255,.10)",
        // borderBottomWidth: 1,
      },
      inputContents: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      },
      textInput: {
        padding: 16,
        width: '100%',
        color: "white",
    },

    goodInput: {
        borderColor: '#52FF5250',
        borderWidth: 1,
        borderRadius: 5
    },
    errorInput: {
        borderColor: '#FF525250',
        borderWidth: 1,
        borderRadius: 5
    },
    icon: {
        marginRight: 12
    },
    label: {
        position: "absolute",
        top: -12,
        backgroundColor: '#1D1F40',
        paddingHorizontal: 5,
        color: "#A7AFF4",
        fontWeight: "600"
    },
    labelIcon: {

    },

    errorIcon: {
        position: "absolute",
        right: 16
    },
    errorText: {
        position: "absolute",
        backgroundColor: '#1D1F40',
        paddingHorizontal: 6,
        bottom: -6,
        color: "#FF5252",
        fontSize: 12,
        left: 0
    },
})

export const screen = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1D1F40',
        padding: 16,
        paddingBottom: 32,
    },
    flexStart: {
        flex: 1,
        backgroundColor: '#1D1F40',
        padding: 16,
        paddingBottom: 32,
    }
})

export const buttons = StyleSheet.create({
    container: {
        marginTop: 48,
        borderTopColor: "rgba(255,255,255,.10)",
        borderTopWidth: 1,
        width: '100%',
        alignItems: "center",
    },
    basic: {
        flexDirection: "row",
        paddingVertical: 16,
        // borderColor: "#EAC501",
        borderColor: "rgba(255,255,255,.10)",
        borderWidth: 1,
        marginBottom: 16,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    arrow: {
        flexDirection: "row",
        paddingVertical: 16,
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
        alignItems: "center",
        width: "100%"
    },
    link: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        alignSelf: "flex-end"
    },
    linkText: {
        textAlign: "right",
        color: "#FFFFFF",
        marginRight: 48
    },
    basicText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    arrowText: {
        color: "white",
        flex: 1,
        fontWeight: "normal"
    },
    icon: {
        marginRight: 12
    }
})


export const auth = StyleSheet.create({
    heading: {
        alignItems: "center",
        marginBottom: 24
    },
    header: {
        fontWeight: "900",
        fontSize: 25,
        color: "white"
    },
    inputsContainer: {
        width: "100%"
    },
    text: {
        color: "white"
    }
})
