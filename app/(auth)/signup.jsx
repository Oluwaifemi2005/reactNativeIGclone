import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Link } from 'expo-router';


const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Enter a valid email').required(),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password must match').required('Please confirm your password')
})

const signup = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">

        <Text style={styles.title}>Create Account</Text>

        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={signupSchema}
            onSubmit={(values) => {
                console.log('Signup values:', values)
            }}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched, submitCount}) => (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Full Name'
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                    />
                    {submitCount > 0 && errors.name && (<Text style={styles.error}>{errors.name}</Text>)}

                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    {submitCount > 0 && errors.email && (<Text style={styles.error}>{errors.email}</Text>)}


                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />
                    {submitCount > 0 && errors.password && (<Text style={styles.error}>{errors.password}</Text>)}


                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        secureTextEntry
                        value={values.confirmPassword}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                    />
                        {submitCount > 0 && errors.confirmPassword && (<Text style={styles.error}>{errors.confirmPassword}</Text>)}

                        <Button title='Sign Up' onPress={handleSubmit}/>
                        <Link href="/login" style={styles.link}>
                            Already have an account? Log in
                        </Link>
                </View>
            )}

        </Formik>
        </ScrollView>

    </KeyboardAvoidingView>



  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  link: {
  marginTop: 20,
  textAlign: 'center',
  color: 'blue',
},
});

export default signup