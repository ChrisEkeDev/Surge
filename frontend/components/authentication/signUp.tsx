import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { inputs, screen, buttons, auth } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { NewUserCedentials } from '../../models';
import { useApp } from '../../context/appContext';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { thunkSignUp } from '../../store/session';


export default function SignUp({ navigation }) {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [goodData, setGoodData] = useState(undefined)
    const { setLoading } = useApp();
    const [errors, setErrors] = useState(undefined)



    const handleSignUp = async () => {
        setLoading(true)
        const user:NewUserCedentials = {
            username,
            email,
            password,
            confirmPassword
        }
        const userData = await dispatch(thunkSignUp(user))
        if (userData?.status && userData?.status >= 400) {
            setErrors(userData.errors)
        } else {
            console.log(userData)
        }
         setLoading(false)
    }

    useEffect(() => {
        let goodData:any = {}
        let currErrors = { ...errors }
        if (username.trim().length >= 3) {
            goodData.username = true
            delete currErrors.username
        }
        if (password.trim().length >= 6) {
            goodData.password = true
            delete currErrors.password
        }
        if (email.includes(".") && email.includes("@")) {
            goodData.email = true
            delete currErrors.email
        }
        if (goodData.password && password === confirmPassword) {
            goodData.confirmPassword = true
            delete currErrors.confirmPassword
        }
        setErrors(currErrors)
        setGoodData(goodData)
    }, [username, email, password, confirmPassword])

    return (
        <View style={screen.centered}>
            <View style={auth.heading}>
                <MaterialIcons name='bolt' size={32} color="#A7AFF4"/>
                <Text style={auth.header}>SURGE</Text>
                <Text style={auth.text}>Sign Up</Text>
            </View>
            <View style={auth.inputsContainer}>
                <Input
                    label="Username"
                    name="username"
                    icon={null}
                    handle={setUsername}
                    value={username}
                    placeholder=""
                    type="text"
                    error={errors?.username}
                    goodData={goodData?.username}
                />
                <Input
                    label="Email"
                    name="email"
                    icon={null}
                    handle={setEmail}
                    value={email}
                    placeholder=""
                    type="text"
                    error={errors?.email}
                    goodData={goodData?.email}
                />
                <Input
                    label="New Password"
                    name="new-password"
                    icon={null}
                    handle={setPassword}
                    value={password}
                    placeholder=""
                    type="password"
                    error={errors?.password}
                    goodData={goodData?.password}
                />
                <Input
                    label="Confirm Password"
                    name="confirm-password"
                    icon={null}
                    handle={setConfirmPassword}
                    value={confirmPassword}
                    placeholder=""
                    type="password"
                    error={errors?.confirmPassword}
                    goodData={goodData?.confirmPassword}
                />
            </View>
            <View style={buttons.container}>
                <Button
                    style=""
                    icon={null}
                    handle={handleSignUp}
                    label="Sign Up"
                    disabled={errors && Object.values(errors).length}

                />
                <Button
                    style="link"
                    icon={<MaterialCommunityIcons style={buttons.icon} name='account-question-outline' size={20} color="#A7AFF4"/>}
                    handle={() => navigation.navigate("Sign In")}
                    label="Already have an account?"
                    disabled={false}
                />
            </View>
        </View>
    )
}
