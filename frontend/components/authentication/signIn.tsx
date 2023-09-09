
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { screen, auth, buttons } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { User } from '../../models';
import { useApp } from '../../context/appContext';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getUser, setUser, thunkSignIn } from '../../store/session';


export default function SignIn({ navigation }) {
    const user = useAppSelector(state => getUser(state))
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoading } = useApp();
    const [errors, setErrors] = useState({})

    const handleSignIn = async () => {
        setLoading(true)
        const credentials = {username, password}
        try {
            const user = await dispatch(thunkSignIn(credentials))
            console.log(user)
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={screen.centered}>
            <View style={auth.heading}>
                <MaterialIcons name='bolt' size={32} color="#A7AFF4"/>
                <Text style={auth.header}>SURGE</Text>
                <Text style={auth.text}>Sign In</Text>
            </View>
            <View style={auth.inputsContainer}>
                <Input
                    name="username"
                    icon={null}
                    handle={setUsername}
                    value={username}
                    placeholder="Username"
                    type="text"
                />
                <Input
                    name="current-password"
                    icon={null}
                    handle={setPassword}
                    value={password}
                    placeholder="Password"
                    type="text"
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
