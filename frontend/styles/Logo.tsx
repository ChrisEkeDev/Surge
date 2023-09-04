import { Pressable, Text, View, TextInput, StyleSheet} from "react-native";
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Logo({icon}) {


    return (
        <Pressable style={back.container}>
            {icon}
        </Pressable>
    )
}

export const back = StyleSheet.create({
    container: {
        height: 48,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 30,
        marginRight: 8
    },
})
