
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { screen, auth } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { buttons } from '../../styles/MasterStyles';
import { User } from '../../models';
import { useApp } from '../../context/appContext';

export default function SignIn({ navigation }) {
    const { setUser } = useApp();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const addUser = () => {
        const user:User = {
            id: 1,
            name: "User Name",
            email: "email@email.com"
        }
        setUser(user)
    }


    return (
        <View style={screen.centered}>
            <View style={auth.heading}>
                <MaterialIcons name='bolt' size={32} color="#A7AFF4"/>
                <Text style={auth.header}>SURGE</Text>
                <Text style={auth.text}>Sign In</Text>
            </View>
            <View>
                <Input
                    icon={null}
                    handle={setUsername}
                    value={username}
                    placeholder="Username"
                />
                <Input
                    icon={null}
                    handle={setPassword}
                    value={password}
                    placeholder="Password"
                />
            </View>
            <View style={buttons.container}>
                <Button
                    style=""
                    icon={<MaterialCommunityIcons style={buttons.icon} name='login-variant' size={20} color="#A7AFF4" />}
                    handle={addUser}
                    label="Sign In"
                />
                <Button
                    style="arrow"
                    icon={<MaterialCommunityIcons style={buttons.icon} name='account-question-outline' size={20} color="#A7AFF4"/>}
                    handle={() => navigation.navigate("Sign Up")}
                    label="Don't have an account yet?"
                />
            </View>
        </View>
    )
}
