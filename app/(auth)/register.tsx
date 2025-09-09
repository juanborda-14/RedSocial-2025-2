import { router } from "expo-router";
import React, { useState } from "react";

import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");

  return (
    <View style={styles.container}>
      {/* Círculos decorativos */}
      <View style={[styles.circle, { top: -50, left: -50 }]} />
      <View style={[styles.circle, { bottom: -30, right: -60 }]} />
      <View style={[styles.circle, { top: 200, right: -100, opacity: 0.5 }]} />

      {/* Logo */}
      <Image source={require("/assets/images/logoapp.png")} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Crear Cuenta</Text>

      {/* Input Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#ccc"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      {/* Input Confirmar Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.buttonText}>Registrarse</Text>
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
    marginBottom: 30,
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
