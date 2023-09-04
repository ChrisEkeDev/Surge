import { Pressable } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from "react-native";
import { buttons } from "./MasterStyles";

type Props = {
    handle: (v:any) => void,
    label: string,
    icon: any
}
export default function Button<Props>({style, handle, label, icon}) {
    return (
        <Pressable style={buttons.basic} onPress={handle}>
            { icon ?
            <>{icon}</> :
            null
            }
            <Text style={style === "arrow" ? buttons.arrowText : buttons.basicText}>{label}</Text>
            {
                style === "arrow" ?
                <MaterialCommunityIcons name="chevron-right" size={20} color="#353766"/> :
                null
            }
        </Pressable>
    )
}
