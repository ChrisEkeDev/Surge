import React from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { useApp } from '../../context/appContext';
import VehicleItem from './vehicleItem';

const VehiclesScreen = ({ navigation }) => {
  const { myVehicles} = useApp();
  const normalizedVehicles = Object.values(myVehicles)

  return (
    <View style={styles.screenContainer}>
      {
        normalizedVehicles.length > 0 ?
        <FlatList style={styles.list} data={normalizedVehicles} renderItem={(item) => <VehicleItem vehicle={item} navigation={navigation}/>}/> :
        <View style={styles.noVehiclesContainer}>
          <View style={styles.noVehiclesImage}></View>
          <Text style={styles.noVehiclesText}>No Vehicles Yet</Text>
        </View>
      }
      <Pressable style={styles.button} onPress={() => navigation.navigate("Add Vehicle")}>
          <Text style={styles.buttonText}>Add Vehicle</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15,
      paddingBottom: 70
    },
    list: {
        width: '100%'
    },
    button: {
      backgroundColor: "#000",
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 5,
      width: '100%',
      textAlign: 'center'
    },
    buttonText: {
      fontWeight: "bold",
      color: "#fff",
      textAlign: 'center'
    },
    noVehiclesContainer: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#c4c4c4",
      width: '100%',
      marginBottom: 15,
      padding: 30
    },
    noVehiclesText: {

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
