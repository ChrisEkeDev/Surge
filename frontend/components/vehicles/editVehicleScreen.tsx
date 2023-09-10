import React, { useState } from 'react';
import { chargers } from '../../models';
import { useApp } from '../../context/appContext';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Vehicle } from '../../models';
import ChargerItem from './ChargerItem';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Pressable, ScrollView, TextInput, StyleSheet, FlatList } from 'react-native'
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { buttons } from '../../styles/MasterStyles';
import { thunkEditUserVehicle } from '../../store/vehicles';

const EditVehicleScreen = ({ route, navigation }) => {
  const { vehicle } = route.params;
  const user = useAppSelector(state => state.session.user)
  const [name, setName] = useState(vehicle.name)
  const [make, setMake] = useState(vehicle.make)
  const [model, setModel] = useState(vehicle.model)
  const [year, setYear] = useState(vehicle.year)
  const [chargerId, setChargerId] = useState(vehicle.chargerId)
  const dispatch = useAppDispatch();
  const { setLoading } = useApp();


  const handleEdit = async () => {
    setLoading(true)
    const v:Vehicle = {
      id: vehicle.id,
      name,
      make,
      model,
      year: Number(year),
      chargerId,
    }
    try {
      const newVehicle = await dispatch(thunkEditUserVehicle(v))
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
      navigation.push("Vehicles")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.screenHeader}>
          <MaterialIcons name="electric-car" size={24} color="#A7AFF4"/>
          <Text style={styles.formLabel}>Vehicle Information</Text>
        </View>
        <Input
          name="name"
          type="text"
          icon={null}
          handle={setName}
          value={name}
          placeholder="Name"
      />
      <Input
          name="name"
          type="text"
          icon={null}
          handle={setMake}
          value={make}
          placeholder="Make"
      />
      <Input
          name="name"
          type="text"
          icon={null}
          handle={setModel}
          value={model}
          placeholder="Model"
      />
        <Input
          name="name"
          type="text"
          icon={null}
          handle={setYear}
          value={year}
          placeholder="Year"
      />
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
        <View style={buttons.container}>
            <Button
              style=""
              icon={<MaterialCommunityIcons style={buttons.icon} name='checkbox-marked-circle-outline' size={20} color="#50A85E" />}
              handle={() => handleEdit()}
              label="Save Vehicle"
            />
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

export default EditVehicleScreen
