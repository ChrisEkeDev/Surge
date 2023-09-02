import React from 'react';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
    const { locationsOn, setLocationsOn } = useApp();

    const node = locationsOn ? styles.toggleActive : styles.toggleInactive

    return  (
        <View style={styles.screenContainer}>
            <Pressable onPress={() => setLocationsOn(!locationsOn)} style={styles.button}>
                <Text>Location Services</Text>
                <View>
                    <Feather name="map-pin" size={25} color={locationsOn ? "black" : "#c4c4c4"} />
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile")} style={styles.button}>
                <Text>Profile</Text>
                <View>
                    <Feather name="user" size={25} color="black" />
                </View>
            </Pressable>
            <Pressable style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Sign Out</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 70
    },
    button: {
        width: '100%',
        padding: 15,
        borderColor: "#c4c4c4",
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderRadius: 5
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
