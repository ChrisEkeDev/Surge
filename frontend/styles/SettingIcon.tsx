import { Pressable, Text, View, TextInput, StyleSheet} from "react-native";
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingIcon() {


    return (
        <Pressable style={back.container}>
            <MaterialCommunityIcons name='cog-outline' size={20}  color="white"/>
        </Pressable>
    )
}

export const back = StyleSheet.create({
    container: {
        height: 48,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8
    },
})
