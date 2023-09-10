
import { View, TextInput, Text } from "react-native";
import { inputs } from "./MasterStyles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Input({label, handle, value, icon, placeholder, name, type, error, goodData}) {
    return (
        <View style={inputs.inputContainer}>
            {
                icon ?
                <View style={inputs.labelIcon}>
                    {icon}
                </View> :
                null
            }
            <View style={inputs.inputContents}>
                <Text style={inputs.label}>{label}</Text>
                <TextInput
                    autoComplete={name}
                    secureTextEntry={placeholder === "Password" || placeholder === "Confirm Password"}
                    style={[inputs.textInput, goodData ? inputs.goodInput : error ? inputs.errorInput : null]}
                    onChangeText={handle}
                    value={value}
                    placeholder={placeholder || ""}
                    placeholderTextColor="#fff"
                    enterKeyHint="next"
                    inputMode={type}
                />
                {

                    error ?
                    <View style={inputs.errorIcon}>
                        <MaterialCommunityIcons name="alert-circle-outline" size={20} color="#FF5252"/>
                    </View>
                    :
                    goodData ?
                    <View style={inputs.errorIcon}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color="#52FF52"/>
                    </View> :
                    null
                }
                {

                    error ?
                    <Text style={inputs.errorText}>{error}</Text> :
                    null
                }
            </View>
        </View>
    )
}
