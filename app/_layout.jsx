import { Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView className="justify-center flex-1">
      <Text className="text-green-400">From layout header</Text>
      <Stack />
      <Text className="text-yellow-400">From layout footer</Text>
    </SafeAreaView>
  );
};
export default RootLayout;
