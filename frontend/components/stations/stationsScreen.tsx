import { View, Text, Pressable, FlatList, StyleSheet, TextInput } from 'react-native';
import { pressables } from '../../styles/Pressables';
import StationItem from './stationItem';
import { useApp } from '../../context/appContext';
import { locations } from '../../models';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Map from './Map';

const StationsScreen = ({ navigation }) => {
    const { view, setView, currentLocation, setCurrentLocation } = useApp();

    const handleView = () => {
        if (view === "map") setView('list')
        else setView('map')
    }
    const station = currentLocation;
    console.log(station)

    return (
        <>
        {
            view === 'map' ?
            currentLocation ?
            <View style={styles.currentLocation}>
                <MaterialCommunityIcons name='navigation-variant-outline' size={24} color="#000"/>
                <View style={styles.currentDistance}>
                    <Text style={styles.currentAddress}>{currentLocation.address}</Text>
                    <Text style={styles.currentMiles}>10 mi</Text>
                    <Pressable onPress={() => setCurrentLocation(null)} style={styles.closeNavigation} >
                        <MaterialIcons name="close"size={20} color="#FF5252"/>
                    </Pressable>
                </View>
            </View> :
            <View>
                <Text>Showing Locations</Text>
            </View>
        :
            <View style={styles.listContainer}>
                <FlatList style={styles.stationList} data={locations} renderItem={(item) => <StationItem station={item} navigation={navigation} />}/>
            </View>
        }
        <View style={styles.bottomOptions}>
            <Pressable onPress={handleView} style={pressables.iconButton}>
                {
                    view === "map" ?
                    <MaterialCommunityIcons name="view-list-outline" size={30} color="#A7AFF4" /> :
                    <MaterialCommunityIcons name="map-legend" size={30} color="#A7AFF4" />
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
    closeNavigation: {
        height: 32,
        aspectRatio: 1,
        marginLeft: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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
    currentLocation: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        elevation: 2,
        shadowColor: "rgba(0,0,0,.25)",
        gap: 10
    },
    currentDistance: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    currentAddress: {
        flex: 1,
    },
    currentMiles: {
        fontWeight: "bold",
    },
    navigationIcon: {

    },
    resultsTitle: {
        fontWeight: "bold",
        color: "#A7AFF4",
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
        backgroundColor: "#1D1F40",
        flex: 1,
        paddingHorizontal: 16
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
        // position: "absolute",
        // right: 0
    },
    stationList: {
        marginBottom: 60
    }
})

export default StationsScreen;
