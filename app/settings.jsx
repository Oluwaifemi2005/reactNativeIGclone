import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const Settings = () => {
    const router = useRouter()
    return (
        <SafeAreaView>
            <View>
                <Text>settings</Text>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Settings