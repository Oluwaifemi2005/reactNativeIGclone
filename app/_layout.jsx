import { Button } from 'react-native';
import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
    }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />

      <Stack.Screen
        name="formInput"
        options={{
          title: 'My Registration Form',
          // headerShown: false,
          headerBackVisible: true,

          headerBackTitle: 'Back',
          headerBackButtonDisplayMode: "default",
          headerBackButtonMenuEnabled: false,
          headerTitleAlign: 'center',


          // headerTitleStyle: {fontWeight: "bold", fontSize: 20, color: "black"},
          // headerShadowVisible: false,


          headerRight: () => (
            <Button
              onPress={() => alert('Settings opened!')}
              title="Settings"
              color="#000"
            />
          ),

          
          headerLeft: () => (
            <Button
              title="Menu"
              onPress={() => alert("Menu pressed!")}
            />
          ),

          headerStyle: {
            backgroundColor: 'purple'
          }
        }}
      />
    </Stack>
  );
}
