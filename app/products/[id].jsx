import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const ProductPage = () => {
    const params = useLocalSearchParams()
  return (
    <View>
      <Text>ProductPage{params.id}</Text>
      <Link href="products/iron">
        <Text>Book</Text>
      </Link>
    </View>
  )
}

export default ProductPage