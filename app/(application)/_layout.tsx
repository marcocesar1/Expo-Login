import useAuthStore from "@/core/auth/store/useAuth";
import { Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Layout = () => {
  const { name, check, isChecking } = useAuthStore();

  useEffect(() => {
    check();
  }, []);

  if (isChecking)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );

  if (!name) return <Redirect href="/auth/login" />;

  return (
    <Stack>
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
