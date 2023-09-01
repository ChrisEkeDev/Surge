import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return  (
        <View style={styles.screenContainer}>
            <Text>Settings Screen</Text>
            <Pressable style={styles.locationButton}>
                <Text>Location Services</Text>
            </Pressable>
            <Pressable style={styles.profileButton}>
                <Text>Profile</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24,
        paddingBottom: 70
    },
    locationButton: {

    },
    profileButton: {

    }
})

export default SettingsScreen
