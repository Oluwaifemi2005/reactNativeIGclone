import { View, Text, FlatList } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Post = () => {
    const [posts, setPosts] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        const fetchData = async (params) => {
            try {
                const response = await axios.get('https://dummyjson.com/posts?limit=20');
                setPosts(response.data.posts)
                
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchData()

    }, [])


    const refreshPost = async () => {
                try {
                    setRefreshing(true)
            const res = await axios.get('https://dummyjson.com/posts?limit=15');
            setPosts(res.data.posts)
                
            } catch (error) {
                console.error(error);
                
            }
            setRefreshing(false)
    }


    const morePost = async () => {
                try {
                    // setRefreshing(true)
            const res = await axios.get('https://dummyjson.com/posts?limit=10');
            setPosts([...posts, res.data.posts])
                
            } catch (error) {
                console.error(error);
                
            }
            // setRefreshing(false)
    }
    
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
        initialNumToRender={10}
        onRefresh={refreshPost}
        refreshing={refreshing}
        onEndReached={morePost}
        onEndReachedThreshold={0.75}

      />
    </View>
  )
}

export default Post