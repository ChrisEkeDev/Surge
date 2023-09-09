
import { View, TextInput } from "react-native";
import { inputs } from "./MasterStyles";

export default function Input({handle, value, icon, placeholder, name, type}) {
    return (
        <View style={inputs.inputContainer}>
            {
                icon ?
                <View>
                    {icon}
                </View> :
                null
            }
            <View style={inputs.inputContents}>
                <TextInput
                    autoComplete={name}
                    secureTextEntry={placeholder === "Password" || placeholder === "Confirm Password"}
                    style={inputs.textInput}
                    onChangeText={handle}
                    value={value}
                    placeholder={placeholder || ""}
                    placeholderTextColor="#fff"
                    enterKeyHint="next"
                    inputMode={type}
                />
            </View>
        </View>
    )
}
