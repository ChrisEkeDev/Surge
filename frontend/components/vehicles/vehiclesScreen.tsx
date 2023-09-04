import React from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { useApp } from '../../context/appContext';
import VehicleItem from './vehicleItem';
import { pressables } from '../../styles/Pressables';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const VehiclesScreen = ({ navigation }) => {
  const { myVehicles} = useApp();
  const normalizedVehicles = Object.values(myVehicles)

  return (
    <View style={styles.screenContainer}>
      {
        normalizedVehicles.length > 0 ?
        <FlatList style={styles.list} data={normalizedVehicles} renderItem={(item) => <VehicleItem vehicle={item} navigation={navigation}/>}/> :
        <View style={styles.noVehiclesContainer}>
          <MaterialCommunityIcons style={styles.noVehiclesIcon} name="car-off" size={32} color="#A7AFF4"/>
          <Text style={styles.noVehiclesText}>No Vehicles Yet</Text>
        </View>
      }
      <View  style={styles.bottomOptions}>
        <Pressable style={pressables.iconButton} onPress={() => navigation.navigate("Add Vehicle")}>
            <MaterialCommunityIcons name="plus" size={20} color="#A7AFF4"/>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#1D1F40',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingBottom: 70
    },
    list: {
        width: '100%'
    },
    bottomOptions: {
      position: "absolute",
        bottom: 0,
        right: 0,
        padding: 16,
        zIndex: 2,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: 16,
    },
    iconButton: {
      fontWeight: "bold",
      color: "#fff",
      textAlign: 'center'
    },
    noVehiclesContainer: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      marginBottom: 15,
      paddingVertical: 32,
      paddingHorizontal: 60
    },
    noVehiclesIcon: {
        marginBottom: 16
    },
    noVehiclesText: {
      color: "rgba(255,255,255,.5)"
    },
    noVehiclesImage: {
      height: 40,
      aspectRatio: 1,
      backgroundColor: "#c4c4c4",
      borderRadius: 40,
      marginBottom: 15
    }
});

export default VehiclesScreen
