import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { inputs, screen, buttons, auth } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { User } from '../../models';
import { useApp } from '../../context/appContext';

export default function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { setUser } = useApp();

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
                <Text style={auth.text}>Sign Up</Text>
            </View>
            <View>
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
            </View>
            <View style={buttons.container}>
                <Button
                    style=""
                    icon={<MaterialIcons style={buttons.icon} name='person-add-alt' size={20} color="#A7AFF4" />}
                    handle={addUser}
                    label="Sign Up"
                />
                <Button
                    style="arrow"
                    icon={<MaterialCommunityIcons style={buttons.icon} name='account-question-outline' size={20} color="#A7AFF4"/>}
                    handle={() => navigation.navigate("Sign In")}
                    label="Already have an account?"
                />
            </View>
        </View>
    )
}
