



import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { inputs, screen } from '../styles/MasterStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import SignUp from '../components/authentication/signUp';
import SignIn from '../components/authentication/signIn';


const Authentication = () => {
  const [username, setUsername] = useState('')
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Sign In'>
      <Stack.Screen options={{
        headerShown: false
      }} name="Sign In" component={SignIn}/>
      <Stack.Screen options={{
        headerShown: false
      }} name="Sign Up" component={SignUp}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,

  }
})
export default Authentication
