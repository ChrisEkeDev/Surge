import { Pressable, Text, View, TextInput, StyleSheet, Keyboard} from "react-native";
import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import * as Location from 'expo-location';
import { useApp } from "../context/appContext";
import axios from 'axios';
import { getStations } from "../utils/GetStations";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const offset = (-1 * windowWidth) + 16
console.log(windowWidth)

export default function SearchBar() {
    const { setCurrentLocation, setStations } = useApp();
    const [query, setQuery ] = useState("")



    const geocodeAddress = async () => {
        Keyboard.dismiss()
        // const coords = await Location.geocodeAsync(query);
        // setCurrentLocation({
        //     latitude: coords[0].latitude,
        //     longitude: coords[0].longitude
        // })
        const stations = await getStations({
            latitude: 32.9991157,
            longitude: -96.9871307
        })
        setStations(stations)
    }

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
            <Pressable onPress={geocodeAddress} style={search.searchButton}>
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
