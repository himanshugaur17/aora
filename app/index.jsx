import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Index = () => {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-2xl">Aora</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Index;
