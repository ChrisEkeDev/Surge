
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useApp } from "../../context/appContext";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { mapStyles } from './mapStyles';


const Map = () => {
    const { locationsOn, currentLocation } = useApp();
    const [location, setLocation] = useState(currentLocation)

    useEffect(() => {
        setLocation(currentLocation)
    }, [currentLocation.latitude, currentLocation.longitude])

    return (
        <View style={styles.map}>
                <MapView
                    showsUserLocation={true}
                    loadingEnabled={true}
                    loadingIndicatorColor="#A7AFF4"
                    loadingBackgroundColor="#1D1F40"
                    initialRegion={{
                        latitude: location?.latitude || 0,
                        longitude: location?.longitude || 0,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.09,
                    }}
                    customMapStyle={mapStyles}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                />
        </View>
    )
}

export default Map;


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        backgroundColor: "green"
    }
  });
