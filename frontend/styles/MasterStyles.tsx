import { StyleSheet } from "react-native";

// INPUTS
export const inputs = StyleSheet.create({
    inputContainer: {
        width: "100%",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
      },
      inputContents: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      },
      textInput: {
        paddingVertical: 16,
        width: '100%',
        color: "white",
    },
    icon: {
        marginRight: 12
    }
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
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
        alignItems: "center",
        width: "100%"
    },
    arrow: {

    },
    basicText: {
        color: "white",
        flex: 1,
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
    text: {
        color: "white"
    }
})
