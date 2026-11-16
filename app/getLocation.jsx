import { AppleMaps, GoogleMaps } from 'expo-maps';
import { useState, useRef, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [address, setAddress] = useState(null);

  // Stores our location subscription
  const locationSubscription = useRef(null);

  const startTracking = async () => {
    setErrorMsg("");

    // Prevent multiple subscriptions
    if (locationSubscription.current) return;

    try {
      // Request permission
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Location permission denied.");
        return;
      }

      // Start watching location
      const subscription =
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 3000,
            distanceInterval: 5,
          },
          (newLocation) => {
            setLocation(newLocation);
          }
        );

      // Save subscription
      locationSubscription.current = subscription;

      setIsTracking(true);

    } catch (error) {
      console.log(error);
      setErrorMsg("Unable to start location tracking.");
    }
  };

  const stopTracking = () => {
    if (locationSubscription.current) {
      locationSubscription.current.remove();

      locationSubscription.current = null;
      setIsTracking(false);
    }
  };
  const getAddress = async () => {
  if (!location) return;

  try {
    const result = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setAddress(result[0] ?? null);
  } catch (error) {
    console.log("Geocoding error:", error);
  }
};

  // Clean up subscription when component unmounts
  useEffect(() => {
    return () => {
      locationSubscription.current?.remove();
    };
  }, []);

  return (
    <View className="flex-1 bg-slate-950 items-center justify-center px-6">

      <Text className="text-white text-3xl font-bold mb-3">
        Live Location Tracker
      </Text>

      <Text className="text-gray-400 mb-6">
        Track your current position.
      </Text>

      <Text className={`font-semibold mb-6 ${
        isTracking ? "text-green-400" : "text-red-400"
      }`}>
        {isTracking ? "● Tracking Active" : "● Tracking Stopped"}
      </Text>

      <Pressable
        onPress={startTracking}
        disabled={isTracking}
        className="bg-emerald-500 px-8 py-4 rounded-xl mb-4"
      >
        <Text className="text-white font-bold">
          Start Tracking
        </Text>
      </Pressable>

      <Pressable
        onPress={stopTracking}
        disabled={!isTracking}
        className="bg-red-500 px-8 py-4 rounded-xl"
      >
        <Text className="text-white font-bold">
          Stop Tracking
        </Text>
      </Pressable>

      {location && (
        <View className="mt-8 items-center">

          <Text className="text-white text-xl font-bold mb-3">
            Current Coordinates
          </Text>

          <Text className="text-gray-300 mb-2">
            Latitude: {location.coords.latitude}
          </Text>

          <Text className="text-gray-300 mb-2">
            Longitude: {location.coords.longitude}
          </Text>

          <Text className="text-gray-400">
            Accuracy: {location.coords.accuracy} metres
          </Text>
          <Pressable
            onPress={getAddress}
            disabled={!location}
            className="bg-blue-500 px-6 py-3 rounded-xl mt-5"
            >
            <Text className="text-white font-bold">
                Get My Address
            </Text>
            </Pressable>

            {address && (
            <View className="mt-6 items-center">
                <Text className="text-white text-xl font-bold">
                Your Address
                </Text>

                <Text className="text-gray-300 mt-2">
                City: {address.city ?? "Unavailable"}
                </Text>

                <Text className="text-gray-300 mt-2">
                Region: {address.region ?? "Unavailable"}
                </Text>

                <Text className="text-gray-300 mt-2">
                Country: {address.country ?? "Unavailable"}
                </Text>
            </View>
            )}

        </View>
      )}

      {errorMsg !== "" && (
        <Text className="text-red-400 mt-5 text-center">
          {errorMsg}
        </Text>
      )}

    </View>
  );
}
