// index.tsx
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

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = () => {
    if (usuario && contrasena) {
      alert(`Bienvenido, ${usuario}!`);
    } else {
      alert("Por favor ingresa usuario y contraseña");
    }
  };

  return (
    <View style={styles.container}>
      {/* Círculos decorativos */}
      <View style={[styles.circle, { top: -50, left: -50 }]} />
      <View style={[styles.circle, { bottom: -30, right: -60 }]} />
      <View style={[styles.circle, { top: 200, right: -100, opacity: 0.5 }]} />

      {/* Logo */}
      <Image source={require("./assets/logoapp.png")} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Red Social</Text>

      {/* Input Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#ccc"
        value={usuario}
        onChangeText={setUsuario}
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

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* Links de navegación */}
      <TouchableOpacity onPress={() => router.push("/(auth)/recover")}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text style={styles.link}>Crear cuenta nueva</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fondo negro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  circle: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "red", // círculos rojos
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 28,
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
  link:{
    color: "#fff", 
    marginTop: 10
  }
});