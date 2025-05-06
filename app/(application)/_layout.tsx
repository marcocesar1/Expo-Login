import useAuthStore from "@/store/useAuth";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Layout = () => {
  const auth = useAuthStore();

  if (!auth.name) return <Redirect href="/auth/login" />;

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
