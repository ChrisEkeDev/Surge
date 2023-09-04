import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const ChargerItem = ({ id, charger, select, navigation }) => {
    return (
    <Pressable
        onPress={() => select(charger.item.id)}
        style={ styles.chargerItem }
        key={charger.id}>
            {
                id === charger.item.id ?
                <>
                    <View style={styles.activeChargerImage}></View>
                    <Text style={styles.activeChargerText}>{charger.item.name}</Text>
                </> :
                <>
                     <View style={styles.inactiveChargerImage}></View>
                    <Text style={styles.inactiveChargerText}>{charger.item.name}</Text>
                </>
            }

    </Pressable>
    )
}

export default ChargerItem;

const styles = StyleSheet.create({
    chargerItem: {
        padding: 16,
        width: "50%",
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      },
      activeChargerImage: {
        height: 60,
        aspectRatio: 1,
        borderColor: "#A7AFF4",
        borderWidth: 4,
        borderRadius: 40
      },
      activeChargerText: {
        color: "#A7AFF4"
      },
      inactiveChargerImage: {
        height: 60,
        aspectRatio: 1,
        borderColor: "rgba(255,255,255,.10)",
        borderWidth: 4,
        borderRadius: 40
      },
      inactiveChargerText: {
        color: "white"
      },
})
