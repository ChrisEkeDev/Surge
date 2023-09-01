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
        <View>
          <Text>No Vehicles Yet</Text>
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
      padding: 24,
      paddingBottom: 70
    },
    list: {
        width: '100%'
    },
    button: {
      backgroundColor: "#000",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 5,
      marginTop: 20,
      width: '100%',
      textAlign: 'center'
    },
    buttonText: {
      fontWeight: "bold",
      color: "#fff",
      textAlign: 'center'
    }
});

export default VehiclesScreen
