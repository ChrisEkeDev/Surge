import React, { useState } from 'react';
import { chargers } from '../../models';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const VehicleDetailsScreen = ({ route, navigation }) => {
    const { vehicle } = route.params;
    const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)


    return (
      <View  style={styles.screenContainer}>
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
            <Pressable onPress={() => navigation.navigate("Edit Vehicle", {vehicle: vehicle})} style={styles.button}>
              <View style={styles.settingLabel}>
              <MaterialCommunityIcons name="circle-edit-outline" size={20} color="#A7AFF4" />
                <Text style={styles.buttonText}>Edit Vehicle</Text>
              </View>
              <View>
                    <MaterialIcons name="chevron-right" size={20} color="#353766" />
              </View>
            </Pressable>
            <Pressable  onPress={() => navigation.navigate("Delete Vehicle", {vehicle: vehicle})} style={styles.button}>
              <View style={styles.settingLabel}>
              <MaterialCommunityIcons name="trash-can-outline" size={20} color="#FF5252" />
              <Text style={styles.buttonText}>Delete Vehicle</Text>
              </View>
              <View>
                    <MaterialIcons name="chevron-right" size={20} color="#353766" />
              </View>
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
  },
  settingLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16
  },
  buttonContainer: {
    width: '100%',
    display: "flex",
    marginVertical: 48,
    borderTopColor: "rgba(255,255,255,.10)",
    borderTopWidth: 1,
  },
  detailItem: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,.10)",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    color: "#A7AFF4"
  },
  detailInfo: {
    color: "white",
    fontSize: 16,
    textAlign: "right"
  },
  chargerItem: {
    width: '100%',
    paddingVertical: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: "rgba(255,255,255,.10)",
    borderBottomWidth: 1,
    gap: 16,
  },
  chargerImage: {
    height: 40,
    aspectRatio: 1,
    borderColor: "#A7AFF4",
    borderWidth: 4,
    borderRadius: 40
  },
  iconImage: {
    height: 40,
    marginBottom: 15,
    aspectRatio: 1,
    backgroundColor: '#c4c4c4',
    borderRadius: 40
  },
  chargerLabel: {
    color: "white"
  },
  buttonText: {
    color: "white"
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderBottomColor: "rgba(255,255,255,.10)",
    borderBottomWidth: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleItem: {
    borderColor: "#c4c4c4",
    borderWidth: 1,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: '100%'
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
      gap: 15,
      flexDirection: 'row'
  },
  chargerName: {

  },
})

export default VehicleDetailsScreen
