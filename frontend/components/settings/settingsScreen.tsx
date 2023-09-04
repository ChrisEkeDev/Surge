import React from 'react';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../../styles/Buttons';
import { buttons } from '../../styles/MasterStyles';

const SettingsScreen = ({ navigation }) => {
    const { setUser } = useApp();

    return  (
        <View style={styles.screenContainer}>
            <Button
                style="arrow"
                icon={<MaterialCommunityIcons style={buttons.icon} name="account-outline" size={20} color="#A7AFF4" />}
                handle={() => navigation.navigate("Profile")}
                label="Profile"
            />
            <Button
                style=""
                icon={<MaterialCommunityIcons style={buttons.icon} name="logout-variant" size={20} color="#A7AFF4" />}
                handle={() => setUser(null)}
                label="Sign Out"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#1D1F40',
        alignItems: 'center',
        padding: 16,
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
