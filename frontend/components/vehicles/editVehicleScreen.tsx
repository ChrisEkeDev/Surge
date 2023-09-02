import React, { useState } from 'react';
import { chargers } from '../../models';
import { useApp } from '../../context/appContext';
import { Vehicle } from '../../models';
import { View, Text, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'

const EditVehicleScreen = ({ route, navigation }) => {
  const { vehicle } = route.params;
  const charger = chargers.find(charger => charger.id === vehicle.item.chargerId)
  const [name, setName] = useState(vehicle.item.name)
  const [make, setMake] = useState(vehicle.item.make)
  const [model, setModel] = useState(vehicle.item.model)
  const [year, setYear] = useState(vehicle.item.year)
  const [chargerId, setChargerId] = useState(charger.id)
  const { editVehicle } = useApp();

  const handleEdit = () => {
    const v:Vehicle = {
      id: vehicle.item.id,
      name,
      make,
      model,
      year: Number(year),
      chargerId
    }
    editVehicle(v)
    navigation.navigate("Vehicles")
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
        <Text style={styles.formLabel}>Vehicle Information</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setName}
          value={name}
          placeholder='Name'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setMake}
          value={make}
          placeholder='Make'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setModel}
          value={model}
          placeholder='Model'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setYear}
          value={year}
          placeholder='Year'
          keyboardType='numeric'
          maxLength={4}
        />
        <Text style={styles.formLabel}>Select a Charger</Text>
        {
          chargers.map(charger => (
            <Pressable
              onPress={() => setChargerId(charger.id)}
              style={chargerId === charger.id ? styles.selectedCharger : styles.unselectedCharger}
              key={charger.id}>
              <View style={styles.chargerImage}></View>
              <Text>{charger.name}</Text>
            </Pressable>
          ))
        }
        <Pressable onPress={() => handleEdit()} style={styles.formButton}>
          <Text style={styles.buttonText}>Save Vehicle</Text>
        </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15
  },
  formLabel: {
    fontWeight: "bold",
    textAlign: 'left',
    width: '100%',
    marginBottom: 15
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    width: '100%',
    borderRadius: 5,
    marginBottom: 15
  },
  selectedCharger: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    padding: 15,
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
    backgroundColor: "#f3f3f3"
  },
  unselectedCharger: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    padding: 15,
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15
  },
  chargerImage: {
    height: 40,
    aspectRatio: 1,
    backgroundColor: "#c4c4c4",
    borderRadius: 40
  },
  formButton: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
    marginBottom: 50
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center'
  }
})

export default EditVehicleScreen
