import { View, Text, StyleSheet, Button } from 'react-native'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'

 const ContextExample = () => {
    const {user, setUser} = useContext(UserContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button
        title="Change Name"
        onPress={() => setUser({ ...user, name: 'Emmanuel' })}
        />
    </View>
  )
}

export default ContextExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});