import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.text}>Aquí verías las publicaciones.</Text>
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
