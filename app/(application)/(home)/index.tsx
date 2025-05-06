import useAuthStore from "@/store/useAuth";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const auth = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={auth.logOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
  },
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
});
