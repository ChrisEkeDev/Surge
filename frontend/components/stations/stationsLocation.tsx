import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useApp } from "../../context/appContext";

const StationLocation = ({ route, navigation }) => {
    const { station } = route.params;
    const { currentLocation, setCurrentLocation } = useApp();

    return (
        <View style={styles.screenContainer}>
            <View style={styles.stationItem}>
                <View>
                    <Text style={styles.stationName}>{station.item.name}</Text>
                    <Text>{station.item.address}</Text>
                </View>
                <View>
                    <Text style={styles.stationDistance}>{station.item.distance} mi</Text>
                </View>
            </View>
            <Pressable>
                <Text>Get Directions</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    stationItem: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderRadius: 5,
        width: '100%'
    },
    stationName: {
      fontWeight: "bold"
    },
    stationDistance: {
      fontSize: 15,
      fontWeight: "bold"
    }
})
export default StationLocation;
