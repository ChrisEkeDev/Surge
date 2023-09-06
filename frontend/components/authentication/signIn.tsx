
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { screen, auth } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { buttons } from '../../styles/MasterStyles';
import { User } from '../../models';
import { useApp } from '../../context/appContext';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setUser, clearUser } from '../../store/session';
import { thunkSignIn } from '../../store/session';


export default function SignIn({ navigation }) {
    const user = useAppSelector((state) => state.session.user)
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    const handleSignIn = () => {
        const user = {username, password}
        alert({username: user.username, password: user.password})
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
                    handle={handleSignIn}
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
