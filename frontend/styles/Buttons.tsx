import { Pressable } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from "react-native";
import { buttons } from "./MasterStyles";

type Props = {
    handle: (v:any) => void,
    label: string,
    icon: any
}
export default function Button<Props>({style, handle, label, icon, disabled}) {

    const getStyle = () => {
        switch(style) {
            case "arrow": return buttons.arrow;
            case "link": return buttons.link;
            default: return buttons.basic
        }
    }
    const getText = () => {
        switch(style) {
            case "arrow": return buttons.arrowText;
            case "link": return buttons.linkText;
            default: return buttons.basicText
        }
    }

    return (
        <Pressable disabled={disabled} style={getStyle()} onPress={handle}>
            { icon ?
            <>{icon}</> :
            null
            }
            <Text style={getText()}>{label}</Text>
            {
                style === "arrow" || style === "link" ?
                <MaterialCommunityIcons name="chevron-right" size={20} color="#353766"/> :
                null
            }
        </Pressable>
    )
}
