import { router } from 'expo-router';
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Recover() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {/* Círculos decorativos */}
      <View style={[styles.circle, { top: -50, left: -50 }]} />
      <View style={[styles.circle, { bottom: -30, right: -60 }]} />
      <View style={[styles.circle, { top: 200, right: -100, opacity: 0.5 }]} />

      {/* Logo */}
      <Image source={require("./assets/images/logoapp.png")} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <Text style={styles.subtitle}>
        Ingresa tu correo para restablecer la contraseña
      </Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.buttonText}>Enviar enlace</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  circle: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "red",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
