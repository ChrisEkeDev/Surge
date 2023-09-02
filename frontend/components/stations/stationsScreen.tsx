import { View, Text, Pressable, FlatList, StyleSheet, TextInput } from 'react-native';
import StationItem from './stationItem';
import { useApp } from '../../context/appContext';
import { locations } from '../../models';
import { useState } from 'react';

const StationsScreen = ({ navigation }) => {
    const { view, setView } = useApp();

    const handleView = () => {
        if (view === "map") setView('list')
        else setView('map')
    }

    return (
        <>
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.textInput}
                value=""
                placeholder='Enter Address'
            />
            <View style={styles.iconImage}></View>
        </View>
        {
            view === 'map' ?
            <View style={styles.mapContainer}>
                <Text>Stations Map View</Text>
            </View> :
            <View style={styles.listContainer}>
                <FlatList style={styles.stationList} data={locations} renderItem={(item) => <StationItem station={item} navigation={navigation} />}/>
            </View>
        }
        <View style={styles.bottomOptions}>
            <View style={styles.activeCar}>
                <Text style={styles.activeLabel}>Car Name - Charger</Text>
            </View>
            <Pressable onPress={handleView} style={styles.viewButton}>
                <View style={styles.viewIcon}></View>
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
        backgroundColor: "white",
        flex: 1,
        paddingTop: 95,
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    searchBarContainer: {
        position: "absolute",
        width: '100%',
        padding: 15,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 2,
        borderBottomWidth: 1,
        borderBottomColor: "#c4c4c4",
    },
    viewButton: {
        height: 50,
        aspectRatio: 1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#c4c4c4',
    },
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        width: '100%',
        borderRadius: 5,
    },

    viewIcon: {
        height: 25,
        aspectRatio: 1,
        borderRadius: 1,
        backgroundColor: "#c4c4c4",
        position: "absolute",
    },
    iconImage: {
        height: 25,
        aspectRatio: 1,
        borderRadius: 1,
        backgroundColor: "#c4c4c4",
        position: "absolute",
        right: 30
    },
    stationList: {
        marginBottom: 60
    }
})

export default StationsScreen;
