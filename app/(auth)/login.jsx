import { View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'expo-router';

const Login = () => {
    const loginSchema = Yup.object().shape ({
        email: Yup.string().email('Enter a valid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    }) 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log('Login values:', values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            submitCount,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />

              {submitCount > 0 && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />

              {submitCount > 0 && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <Button title="Log In" onPress={handleSubmit} />
              <Link href="/signup" style={styles.link}>
                Dont have an account? Sign up
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
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

export default Login



