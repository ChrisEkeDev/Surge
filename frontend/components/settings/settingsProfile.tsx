import React, { useState } from 'react';
import { useApp } from '../../context/appContext';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';

const SettingsProfile = ({ navigation }) => {
    const [ deleting, setDeleting ] = useState(false);
    return  (
        <View style={styles.screenContainer}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={deleting}
            onRequestClose={() => setDeleting(false)}
            >
                <View style={styles.modalContainer}>
              <View style={styles.iconImage}></View>
              <Text style={styles.modalTitle}>Are you sure you want to delete this account?</Text>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonPrimary} >
                  <Text style={styles.buttonPrimaryText}>Delete Vehicle</Text>
                </Pressable>
                <Pressable style={styles.buttonSecondary} onPress={() => setDeleting(false)}>
                  <Text style={styles.buttonSecondaryText}>Keep Vehicle</Text>
                </Pressable>
              </View>
            </View>
            </Modal>
            <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>First Name</Text>
                <Text style={styles.detailInfo}>First Name</Text>
            </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Last Name</Text>
            <Text style={styles.detailInfo}>Last Name</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailInfo}>Email</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Password</Text>
            <Text style={styles.detailInfo}>Password</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => navigation.navigate("Edit Profile")} style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Edit Profile</Text>
            </Pressable>
            <Pressable onPress={() => setDeleting(true)} style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Delete Profile</Text>
            </Pressable>
          </View>
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
    modalContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        padding: 24
      },
    modalTitle: {
        marginBottom: 16,
        fontWeight: 'bold'
      },
    buttonSecondary: {
        backgroundColor: "#c4c4c4",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    buttonSecondaryText: {
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
      },
    buttonContainer: {
        width: '100%',
      },
    button: {
        width: '100%',
        padding: 12,
        borderColor: "#c4c4c4",
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderRadius: 5
    },
    toggleContainer: {
        width: 50,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#c4c4c4"
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
        right: 0,
        backgroundColor: "#c4c4c4"
    },
    iconImage: {
        height: 40,
        marginBottom: 16,
        aspectRatio: 1,
        backgroundColor: '#c4c4c4',
        borderRadius: 40
    },
    buttonPrimary: {
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
      },
    buttonPrimaryText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
      },
    detailLabel: {

      },
    detailInfo: {
        fontWeight: "bold"
      },
    detailItem: {
        width: '100%',
        padding: 12,
        borderColor: "#c4c4c4",
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderRadius: 5
    }
})

export default SettingsProfile
