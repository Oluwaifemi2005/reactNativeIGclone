import { View, Text, Button } from "react-native";
import axios from "axios";
import { useState } from "react";


const PutRequest = () => {
    const [responseData, setResponseData] = useState(null)

    const updatePost = async () => {
        try {
            const response = await axios.put('https://dummyjson.com/posts/1', 
                {
                title: 'My Updated Post',
                body: 'I am practising PUT requests with Axios.',
                userId: 1,
                }
            )
            setResponseData(response.data);
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <View>
        <Text>Put Request Practise</Text>
        <Button title="Update Post" onPress={updatePost}/>

        {responseData && (
            <View>
                <Text>Post ID: {responseData.id}</Text>
                <Text>Title: {responseData.title}</Text>
                {responseData.body && (<Text>Body: {responseData.body}</Text>)}
            </View>
        )}

    </View>
  )
}

export default PutRequest