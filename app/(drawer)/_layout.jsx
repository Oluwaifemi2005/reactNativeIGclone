import { Feather } from "@expo/vector-icons"
import Drawer from "expo-router/drawer"

const DrawerLayout = () => {
  return (
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{drawerLabel: "Home Page", drawerIcon: () => <Feather name="home" size={26}/>}}/>
        <Drawer.Screen name="history" options={{drawerLabel: "History", drawerIcon: () => <Feather name="history" size={26}/>}}/>
        <Drawer.Screen name="signout" options={{drawerLabel: "Signout", drawerIcon: () => <Feather name="log-out" size={26}/>}}/>
      </Drawer>
  )
}

export default DrawerLayout