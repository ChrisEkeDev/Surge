import React from 'react'
import { chargers } from '../../models'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const VehicleItem = ({ vehicle, navigation }) => {
    const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)

    return (
        <Pressable onPress={() => navigation.navigate("My Vehicle", {vehicle: vehicle})} style={styles.vehicleItem}>
            <View style={styles.vehicleInfo}>
                <Text style={styles.vehicleName}>{vehicle.item.name}</Text>
                <Text style={styles.vehicleDetails}>{vehicle.item.year} {vehicle.item.make} {vehicle.item.model}</Text>
            </View>
            <View style={styles.vehicleCharger}>
                <Text style={styles.chargerName}>{charger.name}</Text>
                <View style={styles.chargerImage}></View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    vehicleItem: {
        borderColor: "#c4c4c4",
        borderWidth: 1,
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderRadius: 5
    },
    vehicleInfo: {

    },
    vehicleName: {
        fontWeight: "bold"
    },
    vehicleDetails: {

    },
    vehicleCharger: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row'
    },
    chargerName: {

    },
    chargerImage: {
        height: 40,
        aspectRatio: 1,
        backgroundColor: '#c4c4c4',
        borderRadius: 40
    }
})
export default VehicleItem
