import { Pressable, Text, View, TextInput, StyleSheet} from "react-native";
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const offset = (-1 * windowWidth) + 16
console.log(windowWidth)

export default function SearchBar() {
    const [query, setQuery ] = useState("")
    return (
        <View style={search.searchContainer}>
            <TextInput
                value={query}
                inputMode="search"
                placeholder='Enter Address'
                placeholderTextColor="#fff"
                style={search.searchInput}
                onChangeText={(value) => setQuery(value)}
            />
            <Pressable style={search.searchButton}>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="white" />
            </Pressable>
        </View>
    )
}

export const search = StyleSheet.create({
    searchContainer: {
        position: "absolute",
        width: windowWidth,
        right: 0,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    searchIcon: {
        position: "absolute",
        left: 16
    },
    searchInput: {
        fontSize: 18,
        color: "white",
        width: "100%"
    },
    searchButton: {
        height: 48,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
