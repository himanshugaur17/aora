import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </>
  );
};

export default AuthLayout;
