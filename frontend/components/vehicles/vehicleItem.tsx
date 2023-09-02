import React from 'react'
import { chargers } from '../../models'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const VehicleItem = ({ vehicle, navigation }) => {
    const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)

    return (
        <Pressable onPress={() => navigation.navigate("My Vehicle", {vehicle: vehicle})} style={styles.vehicleItem}>
            <View>
                <Text style={styles.vehicleName}>{vehicle.item.name}</Text>
                <Text>{vehicle.item.year} {vehicle.item.make} {vehicle.item.model}</Text>
            </View>
            <View>
                <Text>{charger.name}</Text>
                <View style={styles.chargerImage}></View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    vehicleItem: {
        borderColor: "#c4c4c4",
        borderWidth: 1,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderRadius: 5
    },
    vehicleName: {
        fontWeight: "bold"
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
        backgroundColor: '#c4c4c4',
        borderRadius: 40
    }
})
export default VehicleItem
