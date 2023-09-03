import React from 'react';
import { useApp } from '../../context/appContext';
import { Pressable, Text,StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
            {/* <MaterialIcons name="bolt" size={24} color="#EAC501" /> */}
            <View>
              <Text style={styles.stationName}>{station.item.name}</Text>
              <Text style={styles.stationAddress}>{station.item.address}</Text>
            </View>
        </View>
        <Pressable onPress={() => getDirections(station.item)} style={styles.navigateButton}>
          <MaterialIcons style={[styles.navigationIcon, {
            transform: [{rotateZ: '45deg'}],
          },]} name='navigation' size={24} color="#A7AFF4"/>
          <Text style={styles.stationDistance}>{station.item.distance} mi</Text>
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
      height: 48,
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    navigationIcon: {
      marginBottom: 2
    },
    stationDistance: {
      fontSize: 15,
      fontWeight: "bold",
      color: "white"
    }
})
export default StationItem;
