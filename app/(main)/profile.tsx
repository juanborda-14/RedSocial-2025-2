import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <Text style={styles.text}>Este es tu perfil.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000", 
    justifyContent: "center", 
    alignItems: "center" 
},
  title: { 
    color: "red", 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 10 
},
  text: { 
    color: "#fff", 
    fontSize: 16 
},
});
