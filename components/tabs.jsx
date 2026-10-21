import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@react-native-vector-icons/feather';

const TabLayout = () => {
  return (
    // tabBarActiveBackgroundColor: "blue", tabBarInactiveBackgroundColor: "yellow",
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown:false}}>
        <Tabs.Screen name='index' options={{tabBarLabel: "Home", tabBarIcon: ({color}) => <Feather name="home" color={color} size={26} />}}/>
        <Tabs.Screen name='profile' options={{href: null}}/>
        <Tabs.Screen name='search' options={{title: 'search screen', headerShown: true, tabBarLabel: "Search", tabBarIcon: ({color}) => <Feather name='search' color={color} size={26}/> }}/>
    </Tabs>
  )
}

export default TabLayout