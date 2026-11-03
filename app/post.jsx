import { View, Text, FlatList } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Post = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async (params) => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts)
                
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchData()

    }, [])
    
  return (
    <View>
      <Text>post</Text>

      <FlatList
        data={posts}
        renderItem={({item}) => (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <Text>{item.tags.history}</Text>

            </View>

        )}
        keyExtractor={(item) => item.id.toString()}

      />
    </View>
  )
}

export default Post