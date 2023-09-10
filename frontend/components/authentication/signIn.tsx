
import { useState, useEffect } from 'react';
import { Platform, View, Text, StyleSheet} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { screen, auth, buttons } from '../../styles/MasterStyles';
import Input from '../../styles/Inputs';
import Button from '../../styles/Buttons';
import { User } from '../../models';
import { useApp } from '../../context/appContext';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getUser, setUser, thunkSignIn } from '../../store/session';
import Toast from 'react-native-root-toast';


export default function SignIn({ navigation }) {
    const user = useAppSelector(state => getUser(state))
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoading } = useApp();
    const [goodData, setGoodData] = useState(undefined)
    const [errors, setErrors] = useState(undefined)

    const handleSignIn = async () => {
        setLoading(true)
        const credentials = {username, password}
        let userData = await dispatch(thunkSignIn(credentials))
        if (userData?.status && userData?.status >= 400) {
            setErrors(userData.errors)
            // Toast.show(userData.message, {
            //     duration: 500
            // })

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
        setErrors(currErrors)
        setGoodData(goodData)
    }, [username, password])

    return (
        <View style={screen.centered}>
            <View style={auth.heading}>
                <MaterialIcons name='bolt' size={32} color="#A7AFF4"/>
                <Text style={auth.header}>SURGE</Text>
                <Text style={auth.text}>Sign In</Text>
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
                    label="Password"
                    name="current-password"
                    icon={null}
                    handle={setPassword}
                    value={password}
                    placeholder=""
                    type="password"
                    error={errors?.password}
                    goodData={goodData?.password}
                />
            </View>
            <View style={buttons.container}>
                <Button
                    style=""
                    icon={null}
                    handle={handleSignIn}
                    label="Sign In"
                    disabled={errors && Object.values(errors).length}
                />
                <Button
                    style="link"
                    icon={<MaterialCommunityIcons style={buttons.icon} name='account-question-outline' size={20} color="#A7AFF4"/>}
                    handle={() => navigation.navigate("Sign Up")}
                    label="Don't have an account yet?"
                    disabled={false}
                />
                <Button
                    style="link"
                    icon={<MaterialCommunityIcons style={buttons.icon} name='form-textbox-password' size={20} color="#A7AFF4"/>}
                    handle={() => console.log("HANDLE GO TO FORGOT PASSWORD")}
                    label="Forgot Password?"
                    disabled={false}
                />
            </View>
        </View>
    )
}
