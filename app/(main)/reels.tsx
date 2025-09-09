import { StyleSheet, Text, View } from "react-native";

export default function Reels() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Reels</Text>
      <Text style={styles.text}>Aquí irían los videos cortos.</Text>
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
