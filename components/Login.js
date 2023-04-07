// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from './AuthButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login functionality
  };

  const handleSignup = () => {
    // Implement signup functionality
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#2980b9', '#6dd5ed']} style={styles.gradient}>
        <Text style={styles.title}>HealthGuardian</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <AuthButton title="Login" onPress={handleLogin} />
          <AuthButton title="Sign Up" onPress={handleSignup} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: '#fff',
  },
});

export default Login;
