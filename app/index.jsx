// import { ScreenContent } from 'components/ScreenContent';
// import { StatusBar } from 'expo-status-bar';

// import './global.css';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <ScreenContent title="Home" path="App.tsx"></ScreenContent>
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }



import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

import '../global.css';

export default function App() {
  const stories = [
  { id: '1', username: 'Jane', letter: 'J' },
  { id: '2', username: 'Manny', letter: 'M' },
  { id: '3', username: 'David', letter: 'D' },
  { id: '4', username: 'John', letter: 'J' },
  { id: '5', username: 'Kate', letter: 'K' },
  { id: '6', username: 'Temi', letter: 'T' },
];

const posts = [
  {
    id: '1',
    username: 'mannyTech',
    image: 'https://picsum.photos/600/600',
    likes: '1,234',
    caption: 'Enjoying the little moments',
  },
  {
    id: '2',
    username: 'Jane',
    image: 'https://picsum.photos/600/601',
    likes: '850',
    caption: 'Beautiful day!',
  },
    {
    id: '3',
    username: 'David',
    image: 'https://picsum.photos/id/1015/600/600',
    likes: '2,450',
    caption: 'Adventure is calling',
  },
    {
    id: '4',
    username: 'Temi',
    image: 'https://picsum.photos/id/1016/600/600',
    likes: '967',
    caption: 'Nature never goes out of style',
  },
    {
    id: '5',
    username: 'John',
    image: 'https://picsum.photos/id/1025/600/600',
    likes: '1,876',
    caption: 'Just another day worth remembering',
  },
    {
    id: '6',
    username: 'Kate',
    image: 'https://picsum.photos/id/1035/600/600',
    likes: '3,102',
    caption: 'Collect moments, not things',
  },
    {
    id: '7',
    username: 'Alex',
    image: 'https://picsum.photos/id/1043/600/600',
    likes: '721',
    caption: 'Finding beauty in the ordinary',
  },
];
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-white'>
        <View className="bg-white">
          <View className="flex-row items-center justify-between px-4 py-3">
            <Text className="text-2xl font-bold">
              Instagram
            </Text>
            <View className="flex-row gap-5">             
              <Feather name="plus-square" size={26} color="black" />
              <Feather name="heart" size={26} color="black" />
              <Ionicons name="paper-plane-outline" size={26} color="black" />
            </View>
          </View>
        </View>
        {/* <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className='mt-2 flex-row gap-8 px-4'>
                <Story username="Jane" letter="J"/>
                <Story username="Manny" letter="M"/>
                <Story username="David" letter="D"/>
                <Story username="John" letter="J"/>
                <Story username="Kate" letter="K"/>
                <Story username="Temi" letter="T"/>

                <FlatList
                  data={stories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 16,
                    gap: 24,
                  }}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Story
                      username={item.username}
                      letter={item.letter}
                    />
                  )}
                />
              </View>
          </ScrollView>
            <Post username="mannyTech"/>

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <Post
                  username={item.username}
                  image={item.image}
                  likes={item.likes}
                  caption={item.caption}
                />
              )}
            />

        </ScrollView> */}



        
              <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                  <FlatList
                    data={stories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 16,
                      paddingTop: 8,
                      gap: 24,
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <Story
                        username={item.username}
                        letter={item.letter}
                      />
                    )}
                  />
                }
                renderItem={({ item }) => (
                  <Post
                    username={item.username}
                    image={item.image}
                    likes={item.likes}
                    caption={item.caption}
                    />
                )}
                
                />
                  <Link href="/formInput" className='text-blue-500'>Open form</Link>


            <View className='flex-row justify-between px-4 py-3 border-t border-gray-200 bg-white'>
              <Feather name='home' size={26} color="black"/>
              <Feather name='search' size={26} color="black"/>
              <Feather name='plus-square' size={26} color="black"/>
              <Feather name='film' size={26} color="black"/>
              <Feather name='user' size={26} color="black"/>

            </View>


      </SafeAreaView>

      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}


function Story({username, letter}){
  return(
          <View className='items-center'>
            <View className='w-20 h-20 rounded-full bg-sky-200 items-center justify-center'>
              <View className='w-16 h-16 rounded-full bg-sky-500 items-center justify-center'>
                <Text className='text-white '>{letter}</Text>
              </View>
            </View>
              <Text className='text-sm mt-3'>{username}</Text>
          </View>
  )
}

function Post(props){
  return(
    <View className='mt-4'>
      <View className='flex-row items-center justify-between px-4 pt-1 pb-2'>
        <View className='flex-row items-center justify-center gap-3'>
        <View className="w-10 h-10 rounded-full bg-sky-500 items-center justify-center">
          <Text className="text-white">{props.username[0].toUpperCase()}</Text>
        </View>
            <Text>{props.username}</Text>

        </View>
        <View>
          <Text className='text-2xl font-bold'>...</Text>
        </View>
      </View>


      <View>
        {/* <Image source={{uri: 'https://picsum.photos/600/600'}} className='w-full h-96'/> */}
        <Image source={{uri: props.image}} className='w-full h-96'/>
      </View>

      <View className='flex-row items-center justify-between px-4 py-3'>
        <View className='flex-row items-center gap-4'>
          <Feather name='heart' size={26} color="black"/>
          <Feather name='message-circle' size={26} color="black"/>
          <Feather name='send' size={26} color="black"/>
        </View>
        <Feather name='bookmark' size={26} color="black"/>
        
      </View> 


      <View className='px-4'>
        {/* <Text>Liked by <Text className='font-bold'>1,234</Text> others</Text> */}
        <Text>Liked by <Text className='font-bold'>{props.likes}</Text> others</Text>
        {/* <Text><Text className='font-bold'>mannyTech</Text> enjoying the little moments</Text> */}
        <Text><Text className='font-bold'>{props.username}</Text>{props.caption}</Text>
        <Text className='text-xs text-gray-500 mt-2'>2 HOURS AGO</Text>
      </View>

    </View>
  )
}