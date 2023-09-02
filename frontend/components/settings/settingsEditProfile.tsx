import React, { useState } from 'react';
import { useApp } from '../../context/appContext';
import { ScrollView, TextInput, Text, StyleSheet, Pressable, Modal } from 'react-native';

const SettingsEditProfile = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.screenContainer}>
            <Text style={styles.formLabel}>Profile Information</Text>
            <TextInput
                style={styles.textInput}
                value="First Name"
                placeholder='First Name'
            />
            <TextInput
                style={styles.textInput}
                value="Last Name"
                placeholder='Last Name'
            />
            <TextInput
                style={styles.textInput}
                value="email@email.com"
                placeholder='Email'
            />
            <TextInput
                style={styles.textInput}
                value="First Name"
                secureTextEntry={true}
                placeholder="Password"
            />
            <TextInput
                style={styles.textInput}
                value="First Name"
                secureTextEntry={true}
                placeholder="Confirm Password"
            />
            <Pressable style={styles.formButton}>
                <Text style={styles.buttonText}>Save Profile</Text>
            </Pressable>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24
      },
      formLabel: {
        fontWeight: "bold",
        textAlign: 'left',
        width: '100%',
        marginBottom: 16
      },
      textInput: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        width: '100%',
        borderRadius: 5,
        marginBottom: 16
      },
      formButton: {
        backgroundColor: "#000",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        marginBottom: 48
      },
      buttonText: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'center'
      }
})

export default SettingsEditProfile;
