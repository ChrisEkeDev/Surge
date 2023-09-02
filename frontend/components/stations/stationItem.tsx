import React from 'react'
import { Pressable, Text,StyleSheet, View } from 'react-native';

const StationItem = ({station, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate("Location", {station: station})} style={styles.stationItem}>
        <View>
            <Text style={styles.stationName}>{station.item.name}</Text>
            <Text>{station.item.address}</Text>
        </View>
        <View>
            <Text style={styles.stationDistance}>{station.item.distance} mi</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  stationItem: {
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
    stationName: {
      fontWeight: "bold"
    },
    stationDistance: {
      fontSize: 15,
      fontWeight: "bold"
    }
})
export default StationItem;
