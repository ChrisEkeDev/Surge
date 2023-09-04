import { Pressable, Text, View, TextInput, StyleSheet} from "react-native";
import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

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
                placeholder='Search Stations by Address'
                placeholderTextColor="#fff"
                style={search.searchInput}
                onChangeText={(value) => setQuery(value)}
            />
            <Pressable style={search.searchButton}>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={20} color="#A7AFF4" />
            </Pressable>
        </View>
    )
}

export const search = StyleSheet.create({
    searchContainer: {
        position: "absolute",
        width: windowWidth - 70,
        right: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
