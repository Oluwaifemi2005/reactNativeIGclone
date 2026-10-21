import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Modal = () => {
    const router = useRouter()
  return (
    <SafeAreaView>
        <View className='pt-[50]'>
        <Text>Modal</Text>
        <TouchableOpacity onPress={() => router.back()}>
            <Text>Go back</Text>
        </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default Modal