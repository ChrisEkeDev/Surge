import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import StationItem from './stationItem';
import { locations } from '../../models';
import { useState } from 'react';

const StationsScreen = ({ navigation }) => {
    const [view, setView] = useState('map')

    return (
        <>
            {
                view === 'map' ?
                <View>
                    <Text>Stations Map View</Text>
                </View> :
                <View>
                    <FlatList style={styles.list} data={locations} renderItem={(item) => <StationItem station={item} navigation={navigation} />}/>
                    <Text>Stations List View</Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
})

export default StationsScreen;
