import { View, Text, Pressable } from 'react-native';

const StationLocation = ({ route, navigation }) => {
    const { location } = route.params;

    return (
        <View>
            <Text>Station Location</Text>
        </View>
    )
}

export default StationLocation;
