import { Pressable, Text, View, TextInput, StyleSheet} from "react-native";
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Back({navigation}) {

    const handleBack = () => {
        navigation.goBack(null)
    }

    return (
        <Pressable style={back.container} onPress={handleBack}>
            <MaterialIcons name="chevron-left" size={24} color="#A7AFF4"/>
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
