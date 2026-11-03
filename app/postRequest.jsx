
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

export default function PostRequest() {
  const [responseData, setResponseData] = useState(null);

  const createPost = async () => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/posts/add',
        {
          title: 'My React Native Journey',
          body: 'I am learning Axios and HTTP requests.',
          userId: 5,
        }
      );

      setResponseData(response.data);
      console.log(response.data);

    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POST Request Practice</Text>

      <Button title="Create Post" onPress={createPost} />

      {responseData && (
        <View style={styles.result}>
          <Text>Post ID: {responseData.id}</Text>
          <Text>Title: {responseData.title}</Text>
          <Text>Body: {responseData.body}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    gap: 10,
  },
});
