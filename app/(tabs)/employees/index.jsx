import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href="/employees/emma">Emma</Link>
      <Link href="/employees/david">David</Link>
    </View>
  )
}

export default index