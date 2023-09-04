import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { buttons } from '../../styles/MasterStyles';
import Button from '../../styles/Buttons';

const SettingsProfile = ({ navigation }) => {

    return  (
        <View style={styles.screenContainer}>
            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Username</Text>
                <Text style={styles.detailInfo}>Username</Text>
            </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailInfo}>Email</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Password</Text>
            <TextInput editable={false} selectTextOnFocus={false} value="password" secureTextEntry={true} style={styles.detailInfo}/>
          </View>

          <View style={buttons.container}>
            <Button
                style="arrow"
                icon={<MaterialCommunityIcons style={buttons.icon} name="account-edit-outline" size={20} color="#A7AFF4" />}
                handle={() => navigation.navigate("Edit Profile")}
                label="Edit Profile"
            />
            <Button
                style="arrow"
                icon={<MaterialCommunityIcons style={buttons.icon} name="account-cancel-outline" size={20} color="#FF5252" />}
                handle={() => navigation.navigate("Delete Profile")}
                label="Delete Profile"
            />
          </View>
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
    modalContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.25)',
        alignItems: 'center',
        width: '100%',
        padding: 16
      },

      modalContents: {
        backgroundColor: "#1D1F40",
        width: "100%",
        borderRadius: 5,
        padding: 16,
        elevation: 5,
        shadowColor: "rgba(0,0,0,.5)"
      },
    modalTitle: {
        marginBottom: 15,
        fontWeight: 'bold'
      },
      settingLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
      },
    buttonText: {
      color: "white"
    },
    buttonContainer: {
        width: '100%',
        display: "flex",
        marginVertical: 48,
        borderTopColor: "rgba(255,255,255,.10)",
        borderTopWidth: 1,
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
    iconImage: {
        height: 40,
        marginBottom: 15,
        aspectRatio: 1,
        backgroundColor: '#c4c4c4',
        borderRadius: 40
    },
    buttonPrimary: {
        backgroundColor: '#000',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
      },
    buttonPrimaryText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
      },
      detailLabel: {
        color: "#A7AFF4"
      },
    detailInfo: {
        color: "white",
        fontSize: 16,
        textAlign: "right"
      },
    detailItem: {
        width: '100%',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,.10)",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default SettingsProfile
