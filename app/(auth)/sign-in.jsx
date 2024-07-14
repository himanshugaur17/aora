import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SignIn;
