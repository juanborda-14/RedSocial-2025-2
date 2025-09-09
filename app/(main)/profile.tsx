import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const mockPosts = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Post+" + (i + 1),
}));

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/neon.jpg")}
          style={styles.avatar}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>350</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Info usuario */}
      <Text style={styles.username}>@ElJhonny14</Text>
      <Text style={styles.bio}>Soy un estudiante de informatica que disfruta del gaming, mis juego favoritos son: Minecraft, Saga Arkham, Fortnite </Text>

      {/* Botón */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Grid de publicaciones */}
      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.post} />
        )}
        contentContainerStyle={styles.postContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "red",
  },
  statsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#ccc",
    fontSize: 14,
  },
  username: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  bio: {
    color: "#ccc",
    marginBottom: 10,
  },
  editButton: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 15,
  },
  editText: {
    color: "red",
    fontWeight: "bold",
  },
  postContainer: {
    gap: 2,
  },
  post: {
    width: "32%",
    height: 120,
    margin: "0.66%",
    borderRadius: 6,
  },
});
