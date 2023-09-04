import React, { useState } from 'react';
import { useApp } from '../../context/appContext';
import { ScrollView, View, TextInput, Text, StyleSheet, Pressable, Modal, ToastAndroid } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Input from '../../styles/Inputs';
import { buttons, inputs } from '../../styles/MasterStyles';
import Button from '../../styles/Buttons';


const SettingsEditProfile = ({ navigation }) => {
    const user = {
        username: "Username",
        email: "email@email.com"
    }

    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");



    return (
        <ScrollView contentContainerStyle={styles.screenContainer}>
                <Input
                    icon={<MaterialCommunityIcons style={inputs.icon} name='account-outline' size={20} color="#A7AFF4"/>}
                    handle={setUsername}
                    value={username}
                    placeholder="Username"
                />
                <Input
                    icon={<MaterialCommunityIcons style={inputs.icon} name='email-outline' size={20} color="#A7AFF4"/>}
                    handle={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <Input
                    icon={<MaterialCommunityIcons style={inputs.icon} name='form-textbox-password' size={20} color="#A7AFF4"/>}
                    handle={setPassword}
                    value={password}
                    placeholder="Password"
                />
                <Input
                    icon={<MaterialCommunityIcons style={inputs.icon} name='form-textbox-password' size={20} color="#A7AFF4"/>}
                    handle={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                />

            <View style={buttons.container}>
              <Button
                style=""
                icon={<MaterialCommunityIcons style={buttons.icon} name='checkbox-marked-circle-outline' size={20} color="#50A85E" />}
                handle={() => navigation.goBack(null)}
                label="Save Changes"
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
        paddingTop: 16
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

export default SettingsEditProfile;
