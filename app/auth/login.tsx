import useAuthStore from "@/core/auth/store/useAuth";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const auth = useAuthStore();

  const onSubmit = (name: string) => {
    const wasSuccessful = auth.logIn(name);

    if (!wasSuccessful) return;

    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => onSubmit("Marco")}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
