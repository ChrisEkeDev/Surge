import MapboxGL from "@rnmapbox/maps";
import React, { useState } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid, ToastAndroid } from 'react-native';
import { useApp } from "../../context/appContext";
import MapView from 'react-native-maps';


const Map = () => {
    const { locationsOn } = useApp();

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapView style={styles.map}/>
            </View>
        </View>
    )
}

export default Map;


const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    container: {
      flex: 1,
      backgroundColor: "tomato"
    },
    map: {
        width: '100%',
        height: '100%',
    }
  });
