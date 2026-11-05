import { Button } from 'react-native';
import { Stack } from 'expo-router';
import '../global.css';
import DataProvider from 'context/DataContext';
import { UserProvider } from 'context/UserContext';
import { AuthProvider } from 'context/authContext';
import { useAuth } from 'context/authContext';

const RootNavigation = () => {

  const auth = useAuth()
  console.log(auth.isLoggedIn)
  return(
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
        <Stack.Protected guard={true}>
          <Stack.Screen
            name="(drawer)"
            options={{
              title: 'Home',
              headerShown: false
            }}
          />

        </Stack.Protected>

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

        <Stack.Screen
          name='modal'
          options={{presentation: 'formSheet',
            sheetAllowedDetents: [0.25, 0.5, 1],
            sheetInitialDetentIndex: 1,  sheetGrabberVisible: true,
            sheetCornerRadius: 24,
            sheetLargestUndimmedDetentIndex: 1,
            headerShown: true}}
        />


            {/* <Stack.Protected guard={auth.isLoggedIn}> */}
            <Stack.Screen
              name='post'
              options={{
                headerShown: false
              }}
            />
            {/* </Stack.Protected> */}
      </Stack>

  )
  
}


export default function RootLayout() {
  return (
    <AuthProvider>
      <DataProvider>
        <UserProvider>
        <RootNavigation/>
        </UserProvider>
      </DataProvider>
    </AuthProvider>
  );
}
