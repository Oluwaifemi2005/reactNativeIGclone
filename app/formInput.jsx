import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView, Pressable, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";



export default function App(){
    return(
        <KeyboardAvoidingView className="flex-1 bg-white" behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
            <ScrollView className="flex-1 bg-white" contentContainerStyle={{padding: 24,}}>
                <Text className="text-3xl font-bold">
                    Create Account
                </Text>
                <Text className="text-gray-500 mt-2 mb-6">
                    Fill in your details to register.
                </Text>

                
                    <View className="mb-4">
                    <Text className="font-semibold mb-2">
                        Full Name
                    </Text>

                    <TextInput
                        placeholder="Enter your full name"
                        className="border border-gray-300 rounded-lg mb-5 px-4 py-3"
                    />
                    <Text className="mb-2 font-semibold text-gray-700">
                        Email Address
                    </Text>
                    <TextInput 
                        className="mb-5 rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text className="mb-2 font-semibold text-gray-700">
                        Password
                    </Text>
                    <TextInput 
                        className="mb-5 rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                    </View>
                    <Text className="mb-2 font-semibold text-gray-700">
                        Phone Number
                    </Text>
                    <TextInput 
                        className="mb-5 rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Enter your phone number"
                        keyboardType="phone-pad"
                    />
                    <Text className="mb-2 font-semibold text-gray-700">
                        Gender
                    </Text>
                    <View>
                        <Pressable className="flex-1 rounded-lg border border-gray-300 p-3">
                            <Text className="text-center">
                                Male
                            </Text>
                        </Pressable>
                        <Pressable className="flex-1 rounded-lg border border-gray-300 p-3">
                            <Text className="text-center">
                                Female
                            </Text>
                        </Pressable>
                        <Pressable className="flex-1 rounded-lg border border-gray-300 p-3">
                            <Text className="text-center">
                                Other
                            </Text>
                        </Pressable>
                    </View>
                    <Text className="mb-2 font-semibold border-gray-700">
                        About me
                    </Text>
                    <TextInput
                        className="mb-6 rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Tell us a little about yourself"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />


                    <TouchableOpacity className="mt-2 rounded-lg bg-blue-600 py-4" onPress={() => console.log('Form submitted')}>
                    <Text className="text-center text-base font-bold text-white">
                        Submit
                    </Text>
                    </TouchableOpacity>


                <StatusBar style="dark"/>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}