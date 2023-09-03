import React from 'react';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
    const { locationsOn, setLocationsOn } = useApp();

    const node = locationsOn ? styles.toggleActive : styles.toggleInactive

    return  (
        <View style={styles.screenContainer}>
            <Pressable onPress={() => setLocationsOn(!locationsOn)} style={styles.button}>
                <View style={styles.settingLabel}>
                    <MaterialCommunityIcons name="map-marker-outline" size={24} color="#A7AFF4" />
                    <Text style={styles.buttonText}>Location Services</Text>
                </View>
                <View>
                    {
                        locationsOn ?
                        <MaterialIcons name="my-location" size={24} color="#A7AFF4"/> :
                        <MaterialIcons name="location-disabled" size={24} color="#353766"/>
                    }
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile")} style={styles.button}>
                <View style={styles.settingLabel}>
                    <MaterialCommunityIcons name="account-outline" size={24} color="#A7AFF4" />
                    <Text style={styles.buttonText}>Profile</Text>
                </View>
                <View>
                    <MaterialIcons name="chevron-right" size={24} color="#353766" />
                </View>
            </Pressable>
            <Pressable style={styles.button}>
                <View style={styles.settingLabel}>
                <MaterialCommunityIcons name="logout-variant" size={24} color="#A7AFF4" />
                    <Text style={styles.buttonText}>Sign Out</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#1D1F40',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 70
    },
    settingLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
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
    buttonText: {
        color: "white"
    },
    toggleContainer: {
        width: 40,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#c4c4c4",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    toggleNode: {
        height: 20,
        aspectRatio: 1,
        borderRadius: 20,
        position: "absolute",
    },
    toggleActive: {
        right: 0,
        backgroundColor: "#000"
    },
    toggleInactive: {
        left: 0,
        backgroundColor: "#c4c4c4"
    },
    iconImage: {
        height: 24,
        aspectRatio: 1,
        borderRadius: 1,
        backgroundColor: "#c4c4c4"
    },
    buttonPrimary: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
      },
      buttonPrimaryText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
      }
})

export default SettingsScreen
