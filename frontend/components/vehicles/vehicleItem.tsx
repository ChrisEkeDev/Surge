import React from 'react'
import { chargers } from '../../models'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VehicleItem = ({ vehicle, navigation }) => {
    const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)

    return (
        <Pressable onPress={() => navigation.navigate("My Vehicle", {vehicleId: vehicle.item.id})} style={item.vehicleItem}>
            <View>
                <Text style={item.vehicleName}>{vehicle.item.name}</Text>
                <Text style={item.vehicleDetails}>{vehicle.item.year} {vehicle.item.make} {vehicle.item.model}</Text>
            </View>
            <View style={item.chargerInfo}>
                <View style={item.chargerImage}></View>
                <Text style={item.chargerText}>{charger.name}</Text>
                <MaterialCommunityIcons name='chevron-right' size={20} color="#A7AFF4"/>
            </View>

        </Pressable>
    )
}


 const item = StyleSheet.create({
    vehicleItem: {
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
        paddingVertical: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5
    },
    vehicleDetails: {
        color: "white"
    },
    vehicleName: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18
    },
    vehicleCharger: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'row'
    },
    chargerImage: {
        height: 40,
        aspectRatio: 1,
        borderColor: "#A7AFF4",
        borderWidth: 4,
        borderRadius: 40,
    },
    chargerInfo: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 175,
        gap: 16
    },
    chargerText: {
        color: "white",
        maxHeight: 50
    }
})
export default VehicleItem
