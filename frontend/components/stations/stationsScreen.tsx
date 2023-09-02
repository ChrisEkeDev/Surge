import { View, Text, Pressable, FlatList, StyleSheet, TextInput } from 'react-native';
import { pressables } from '../../styles/Pressables';
import StationItem from './stationItem';
import { useApp } from '../../context/appContext';
import { locations } from '../../models';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Map from './Map';

const StationsScreen = ({ navigation }) => {
    const { view, setView } = useApp();

    const handleView = () => {
        if (view === "map") setView('list')
        else setView('map')
    }

    return (
        <>
        {
            view === 'map' ?
            <Map/>
:
            <View style={styles.listContainer}>
                <Text style={styles.resultsTitle}>{locations.length} Charging Stations found </Text>
                <FlatList style={styles.stationList} data={locations} renderItem={(item) => <StationItem station={item} navigation={navigation} />}/>
            </View>
        }
        <View style={styles.bottomOptions}>
            <View style={styles.activeCar}>
                <Text style={styles.activeLabel}>Car Name - Charger</Text>
            </View>
            <Pressable onPress={handleView} style={pressables.iconButton}>
                {
                    view === "map" ?
                    <MaterialIcons name="list" size={20} color="black" /> :
                    <MaterialIcons name="map" size={20} color="black" />
                }
            </Pressable>
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        backgroundColor: "black",
        flex: 1,
        paddingTop: 95,
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    bottomOptions: {
        position: "absolute",
        bottom: 0,
        padding: 15,
        width: '100%',
        zIndex: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15
    },
    resultsTitle: {
        fontWeight: "bold",
        color: "#353766",
        fontSize: 10
    },
    activeCar: {
        backgroundColor: "white",
        flex: 1,
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#c4c4c4"
    },
    activeLabel: {
        fontWeight: "bold"
    },
    listContainer: {
        backgroundColor: "#0E1037",
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16
    },
    searchBarContainer: {
        position: "absolute",
        width: '100%',
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#c4c4c4",
    },
    viewButton: {

    },
    textInput: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        width: '100%',
        borderRadius: 5,
    },

    viewIcon: {
        position: "absolute",
    },
    iconImage: {
        position: "absolute",
        right: 30
    },
    stationList: {
        marginBottom: 60
    }
})

export default StationsScreen;
