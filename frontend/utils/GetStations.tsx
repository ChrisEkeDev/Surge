import axios from "axios";

export const getStations = async (coords: {latitude: number, longitude: number}) => {
    console.log(coords)
    const options = {
        method: 'GET',
        url: 'https://ev-charging-stations.p.rapidapi.com/get_stations_1km',
        params: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          region: 'us'
        },
        headers: {
          'X-RapidAPI-Key': "bc394ec79emshcdd01a0d9a29d3dp18f005jsn33a14c5b131e",
          'X-RapidAPI-Host': 'ev-charging-stations.p.rapidapi.com'
        }
    }
    try {
        const response = await axios.request(options);
        const myStations = response.data.stations.map(station => {
            return {
                name: station.station_name,
                address: station.street_address,
                city: station.city,
                state: station.state,
                zip: station.zip,
                access: station.access_code,
                availability: station.access_days_time,
                chargers: [...station.ev_connector_types]
            }
        })
        return myStations
    } catch (error) {
        console.error(error);
    }
}
