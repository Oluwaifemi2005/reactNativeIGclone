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



import { View, Text } from 'react-native'
import About from '../components/about';
import React from 'react'

const AboutPage = () => {
  return (
    <View>
      <About/>
    </View>
  )
}

export default AboutPage