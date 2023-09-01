import React, { useState } from 'react';
import { chargers } from '../../models';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'

const VehicleDetailsScreen = ({ route, navigation }) => {
    const [ deleting, setDeleting ] = useState(false);
    const { vehicle } = route.params;
    const { deleteVehicle } = useApp();
    const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)


    const handleDelete = (id: number) => {
      deleteVehicle(id);
      navigation.navigate("Vehicles")
    }

    return (
      <View  style={styles.screenContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={deleting}
            onRequestClose={() => setDeleting(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Are you sure you want to delete this vehicle?</Text>
              <View style={styles.vehicleItem}>
                <View style={styles.vehicleInfo}>
                  <Text style={styles.vehicleName}>{vehicle.item.name}</Text>
                  <Text style={styles.vehicleDetails}>{vehicle.item.year} {vehicle.item.make} {vehicle.item.model}</Text>
                </View>
                <View style={styles.vehicleCharger}>
                    <Text style={styles.chargerName}>{charger.name}</Text>
                    <View style={styles.chargerImage}></View>
                </View>
              </View>
              <View>
                <Pressable style={styles.buttonPrimary} onPress={() => handleDelete(vehicle.item.id)}>
                  <Text style={styles.buttonPrimaryText}>Delete Vehicle</Text>
                </Pressable>
                <Pressable style={styles.buttonSecondary} onPress={() => setDeleting(false)}>
                  <Text style={styles.buttonSecondaryText}>Keep Vehicle</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Make</Text>
            <Text style={styles.detailInfo}>{vehicle.item.name}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Model</Text>
            <Text style={styles.detailInfo}>{vehicle.item.model}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Year</Text>
            <Text style={styles.detailInfo}>{vehicle.item.year}</Text>
          </View>
          <View style={styles.chargerItem}>
            <View style={styles.chargerImage}></View>
            <Text style={styles.chargerLabel}>{charger.name}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => navigation.navigate("Edit Vehicle", {vehicle: vehicle})} style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Edit Vehicle</Text>
            </Pressable>
            <Pressable onPress={() => setDeleting(true)} style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Delete Vehicle</Text>
            </Pressable>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 24,
  },
  modalContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
  modalTitle: {
    marginBottom: 16,
    fontWeight: 'bold'
  },
  detailItem: {
    width: '100%',
    padding: 12,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderRadius: 5
  },
  detailLabel: {

  },
  detailInfo: {
    fontWeight: "bold"
  },
  chargerItem: {
    width: '100%',
    padding: 12,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    gap: 10,
  },
  chargerImage: {
    height: 40,
    aspectRatio: 1,
    backgroundColor: '#c4c4c4',
    borderRadius: 40
  },
  chargerLabel: {

  },
  buttonContainer: {
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    textAlign: 'center',
  },
  buttonPrimaryText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  buttonSecondary: {
    backgroundColor: "#c4c4c4",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSecondaryText: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  vehicleItem: {
    borderColor: "#c4c4c4",
    borderWidth: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
})

export default VehicleDetailsScreen
