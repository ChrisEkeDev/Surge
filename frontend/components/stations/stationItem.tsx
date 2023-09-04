import React from 'react';
import { useApp } from '../../context/appContext';
import { Pressable, Text,StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Location } from '../../models';


const StationItem = ({station, navigation}) => {
  const { setView, setCurrentLocation } = useApp();

  const getDirections = (station: Location) => {
    setCurrentLocation(station);
    setView("map")
  }

  return (
    <View style={styles.stationItem}>
        <View style={styles.stationInfo}>
            <View>
              <Text style={styles.stationName}>{station.item.name}</Text>
              <Text style={styles.stationAddress}>{station.item.address}</Text>
            </View>
        </View>
        <Pressable style={styles.navigateButton}>
          <MaterialCommunityIcons name='chevron-right' size={20} color="#A7AFF4"/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  stationInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 5
  },
  stationItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,.10)"
    },
    stationName: {
      fontWeight: "bold",
      fontSize: 18,
      color: "white"
    },
    stationAddress: {
      color: "white"
    },
    navigateButton: {
      alignItems: "flex-end"
    },
    navigationIcon: {
      marginBottom: 2
    },
    stationDistance: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      textAlign: "right"
    }
})
export default StationItem;
