// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'

// const About = () => {
//     const router = useRouter();
//     const params = useLocalSearchParams();
//   return (
//     <View>
//       <Text>About</Text>
//       <Stack.Screen options={{
//         title:params.name
//       }}/>

//       <TouchableOpacity onPress={() => {router.setParams({name: "Updated title"})}}>
//         <Text>Change Title</Text>
//       </TouchableOpacity>


//       <Link>
//         <Text href="settings">Settings</Text>
//       </Link>
//     </View>
//   )
// }

// export default About



import { View, Text, StyleSheet, Pressable } from 'react-native'
import About from '../components/about';
import React from 'react'
import { DataContext } from 'context/DataContext';
import { useContext } from 'react';
import { Image } from 'expo-image';

const generateHash = async (img) => {
  const hash = await Image.generateBlurhashAsync(img, [4,3]);
  return hash;
}

const AboutPage = () => {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const contextData = useContext(DataContext);
  console.log('====================================');
  console.log(contextData);
  console.log('====================================');
  return (
    <View>
      <About/>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />


      <Pressable onClick={generateHash("https://picsum.photos/seed/696/3000/2000")}>
        <Text>Generate</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: "50%",
    width: '100%',
    backgroundColor: '#0553',
  },
});

export default AboutPage