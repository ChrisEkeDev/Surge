import React, { useState } from 'react';
import { useApp } from '../../context/appContext';
import { ScrollView, View, TextInput, Text, StyleSheet, Pressable, Modal, ToastAndroid } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { buttons } from '../../styles/MasterStyles';
import Button from '../../styles/Buttons';

const SettingsDeleteProfile = ({ navigation }) => {
    const user = {
        username: "Username",
        email: "email@email.com"
    }
    return (
        <ScrollView contentContainerStyle={styles.screenContainer}>
          <MaterialCommunityIcons name="account-alert-outline" size={32} color="#A7AFF4"/>
            <View style={styles.message}>
              <Text style={styles.messageHeader}>Are you sure you want to delete this profile?</Text>
            </View>
            <View style={buttons.container}>
                <Button
                  style=""
                  icon={<MaterialCommunityIcons style={buttons.icon} name="trash-can-outline" size={20} color="#FF5252"/>}
                  handle={() => navigation.goBack(null)}
                  label="Delete Profile"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: '#1D1F40',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 32
      },
      message: {
        marginTop: 16,
        marginHorizontal: 56
      },
      messageHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
      },
      messageText: {
        color: "white",
        textAlign: "center"
      },
      formLabel: {
        fontWeight: "bold",
        textAlign: 'left',
        width: '100%',
        marginBottom: 15
      },
      inputContainer: {
        width: "100%",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
      },
      divider: {
        color: "rgba(255,255,255,.10)",
      },
      inputContents: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      },
      textInput: {
        paddingVertical: 16,
        width: '100%',
        color: "white",
        paddingLeft: 16
      },
      textIcon: {
        position: "absolute",
        right: 16
      },
      formButton: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        marginBottom: 50
      },
      buttonText: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'center'
      },
      actionsContainer: {
        marginTop: 48,
        borderTopColor: "rgba(255,255,255,.10)",
        borderTopWidth: 1,
        width: '100%',
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "rgba(255,255,255,.10)",
        borderBottomWidth: 1,
      },
      actionButton: {
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        gap: 10
      },
      actionButtonText: {
        color: "white"
      }
})

export default SettingsDeleteProfile;
