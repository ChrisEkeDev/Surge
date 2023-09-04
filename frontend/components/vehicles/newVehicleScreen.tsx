import React, { useState } from 'react';
import { chargers } from '../../models';
import { useApp } from '../../context/appContext';
import { Vehicle } from '../../models';
import ChargerItem from './ChargerItem';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native'

const NewVehicleScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [chargerId, setChargerId] = useState(0)
  const { saveVehicle, myVehicles } = useApp();
  const normalizedVehicles = Object.values(myVehicles)

  const submit = () => {
    const v:Vehicle = {
      id: normalizedVehicles.length + 1,
      name,
      make,
      model,
      year: Number(year),
      chargerId
    }
    saveVehicle(v)
    navigation.navigate("Vehicles")
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={styles.screenHeader}>
        <MaterialIcons name="electric-car" size={24} color="#A7AFF4"/>
        <Text style={styles.formLabel}>Vehicle Information</Text>
      </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContents}>
            <TextInput
              style={styles.textInput}
              onChangeText={setName}
              value={name}
              placeholder='Name'
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContents}>
            <TextInput
              style={styles.textInput}
              onChangeText={setMake}
              value={make}
              placeholder='Make'
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContents}>
              <TextInput
              style={styles.textInput}
              onChangeText={setModel}
              value={model}
              placeholder='Model'
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContents}>
              <TextInput
              style={styles.textInput}
              onChangeText={setYear}
              value={year}
              placeholder='Year'
              keyboardType='numeric'
              maxLength={4}
            />
          </View>
        </View>
        <View style={styles.screenHeader}>
          <MaterialIcons name="electrical-services" size={24} color="#A7AFF4"/>
          <Text style={styles.formLabel}>Select a Charger</Text>
        </View>
        <FlatList
          style={styles.chargerList}
          data={chargers}
          ItemSeparatorComponent={() => <View style={styles.gap}></View>}
          numColumns={2}
          renderItem={(item) => <ChargerItem navigation={navigation} select={setChargerId} id={chargerId} charger={item}/>} />
        <View style={styles.actionsContainer}>
            <Pressable onPress={submit} style={styles.actionButton}>
                <MaterialCommunityIcons name='checkbox-marked-circle-outline' size={24} color="#50A85E" />
                <Text style={styles.actionButtonText}>Confirm</Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 70,
    backgroundColor: '#1D1F40',
    paddingHorizontal: 16,
  },
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    gap: 10,
    marginVertical: 16
  },
  formLabel: {
    textAlign: 'left',
    color: "#A7AFF4"
  },
  chargerList: {
    width: '100%',
    marginVertical: 16,
  },
  gap: {
    height: 16,
    aspectRatio: 1,
  },
  divider: {
    color: "rgba(255,255,255,.10)",
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "rgba(255,255,255,.10)",
    borderBottomWidth: 1,
  },
  inputContents: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    paddingVertical: 16,
    width: '100%',
    color: "white",
  },
  formButton: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center'
  },
  actionsContainer: {
    marginTop: 48,
    borderTopColor: "rgba(255,255,255,.10)",
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "rgba(255,255,255,.10)",
    borderBottomWidth: 1,
  },
  actionButton: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    gap: 10
  },
  actionButtonText: {
    color: "white"
  }
})
export default NewVehicleScreen
