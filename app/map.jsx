import { AppleMaps, GoogleMaps } from 'expo-maps';
import { Platform, Text } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const CameraPosition = {
    coordinates: {latitude: 7.3776, longitude: 3.9059},
    zoom: 5
}

const marker = [{
    id: "1",
    coordinates: {latitude: 6.45, longitude: 3.39},
    title: "Real Cafe",
    tintColor: "red",
    systemImage: "fuelpump"
}]

export default function Map() {
      const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  if (!location) {
    return
  }
  if (Platform.OS === 'ios') {
    return <AppleMaps.View style={{ flex: 1 }}  cameraPosition={CameraPosition} markers={[{
    id: "1",
    coordinates: {latitude: 6.45, longitude: 3.39},
    title: "Real Cafe",
    tintColor: "red",
    systemImage: "fuelpump"
},
    {
        id: "2",
        coordinates: {latitude: location.coords.latitude, longitude: location.coords.longitude},
        title: "Me",
        tintColor: "blue"
    }    
]}/>;
  } else if (Platform.OS === 'android') {
    return <GoogleMaps.View style={{ flex: 1 }} cameraPosition={CameraPosition}/>;
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}