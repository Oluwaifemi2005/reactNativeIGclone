
import { AppleMaps, GoogleMaps } from "expo-maps";
import { Platform, Text, View, Pressable } from "react-native";
import { useState, useRef } from "react";
import * as Location from "expo-location";

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [loadingPlaces, setLoadingPlaces] = useState(false);





    const findNearbyPlaces = async () => {
  if (!userLocation) {
    alert("Please get your location first.");
    return;
  }

  setLoadingPlaces(true);

  const { latitude, longitude } = userLocation;

  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="hospital"](around:3000,${latitude},${longitude});
      way["amenity"="hospital"](around:3000,${latitude},${longitude});
      relation["amenity"="hospital"](around:3000,${latitude},${longitude});

      node["amenity"="school"](around:3000,${latitude},${longitude});
      way["amenity"="school"](around:3000,${latitude},${longitude});
      relation["amenity"="school"](around:3000,${latitude},${longitude});
    );
    out center tags;
  `;

  console.log(query);
  try {
  const response = await fetch(
    "https://overpass-api.de/api/interpreter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `data=${encodeURIComponent(query)}`,
    }
  );

  const data = await response.json();

  const places = data.elements.map((place) => ({
  id: place.id,
  name: place.tags?.name ?? "Unnamed place",
  type: place.tags?.amenity,
  latitude: place.lat ?? place.center?.lat,
  longitude: place.lon ?? place.center?.lon,
}));

setNearbyPlaces(places);


  console.log("Number of places:", data.elements.length);

data.elements.forEach((place) => {
  console.log("Place ID:", place.id);
  console.log("Place Name:", place.tags?.name);
  console.log("Place Type:", place.tags?.amenity);
  console.log("Latitude:", place.lat ?? place.center?.lat);
  console.log("Longitude:", place.lon ?? place.center?.lon);
});

  console.log("Overpass response:", data);

    } catch (error) {
    console.log("Search error:", error);
    alert("Could not find nearby places.");
    } finally {
    setLoadingPlaces(false);
    }
};



  const clearLocation = () => {
    setSelectedLocation(null);
  };

  const getUserLocation = async () => {
  try {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Location permission denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    mapRef.current?.setCameraPosition({
  coordinates: {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  },
  zoom: 14,
});

  } catch (error) {
    console.log("Location error:", error);
    alert("Could not get your location");
  }
};

    const mapRef = useRef(null);


    const moveCamera = () => {
    mapRef.current?.setCameraPosition({
        coordinates: {
        latitude: 6.4541,
        longitude: 3.3947,
        },
        zoom: 15,
    });
    };

    const goToMyLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});

    mapRef.current?.setCameraPosition({
        coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        },
        zoom: 10,
    });
    };


    const placeMarkers = nearbyPlaces.map((place) => ({
  id: String(place.id),

  coordinates: {
    latitude: place.latitude,
    longitude: place.longitude,
  },

  title: place.name,
  tintColor: place.type === "hospital" ? "red" : "blue",
}));

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === "ios" ? (
        <AppleMaps.View
            markers={placeMarkers}
            ref={mapRef}
          style={{ flex: 1 }}
          properties={{
            isMyLocationEnabled: true,
          }}
          cameraPosition={{
            coordinates: {
              latitude: 6.5244,
              longitude: 3.3792,
            },
            zoom: 12,
          }}
//           markers={[
//   {
//             id: "selected-marker",
//             coordinates: selectedLocation ?? {
//             latitude: 6.5244,
//             longitude: 3.3792,
//             },
//             title: "Selected Location",
//             tintColor: "red",
//         },
//         ]}
          onMapClick={(event) => {
            console.log("Tapped coordinates:", event.coordinates);
            setSelectedLocation(event.coordinates);
          }}
        />
      ) : Platform.OS === "android" ? (
        <GoogleMaps.View style={{ flex: 1 }} />
      ) : null}

      {selectedLocation && (
        <View
          style={{
            padding: 20,
            backgroundColor: "white",
          }}
        >
          <Text>
            Latitude: {selectedLocation.latitude}
          </Text>

          <Text>
            Longitude: {selectedLocation.longitude}
          </Text>
        </View>
      )}


      {selectedLocation && (
        <Pressable
            onPress={clearLocation}
            style={{
            backgroundColor: "red",
            padding: 15,
            alignItems: "center",
            }}
        >
            <Text style={{ color: "white", fontWeight: "bold" }}>
            Clear Selected Location
            </Text>
        </Pressable>
        )}


        <Pressable
        onPress={moveCamera}
        style={{
            backgroundColor: "green",
            padding: 15,
            alignItems: "center",
        }}
        >
        <Text style={{ color: "white", fontWeight: "bold" }}>
            Move Camera to Lagos
        </Text>
        </Pressable>

        <Pressable
        onPress={goToMyLocation}
        style={{
            backgroundColor: "green",
            padding: 15,
            alignItems: "center",
        }}
        >
        <Text style={{ color: "white", fontWeight: "bold" }}>
            Go to My Location
        </Text>
        </Pressable>

        <Pressable
        onPress={getUserLocation}
        style={{
            backgroundColor: "green",
            padding: 15,
            alignItems: "center",
        }}
        >
        <Text style={{ color: "white", fontWeight: "bold" }}>
            Find Nearby Places
        </Text>
        </Pressable>

        {userLocation && (
        <View style={{ padding: 10 }}>
            <Text>Latitude: {userLocation.latitude}</Text>
            <Text>Longitude: {userLocation.longitude}</Text>
        </View>
        )}


        <Pressable
        onPress={findNearbyPlaces}
        style={{
            backgroundColor: "blue",
            padding: 15,
            alignItems: "center",
            marginTop: 10,
        }}
        >
        <Text style={{ color: "white", fontWeight: "bold" }}>
            {loadingPlaces ? "Searching..." : "Search Hospitals & Schools"}
        </Text>
        </Pressable>


        {nearbyPlaces.map((place) => (
  <View
    key={place.id}
    style={{
      padding: 15,
      marginTop: 10,
      backgroundColor: "#eeeeee",
      borderRadius: 10,
    }}
  >
    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
      {place.name}
    </Text>

    <Text>Type: {place.type}</Text>

    <Text>Latitude: {place.latitude}</Text>

    <Text>Longitude: {place.longitude}</Text>
  </View>
))}

    </View>
  );
}
