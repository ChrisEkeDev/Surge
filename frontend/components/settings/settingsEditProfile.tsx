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
        padding: 15
      },
      formLabel: {
        fontWeight: "bold",
        textAlign: 'left',
        width: '100%',
        marginBottom: 15
      },
      textInput: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        width: '100%',
        borderRadius: 5,
        marginBottom: 15
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
      }
})

export default SettingsEditProfile;
