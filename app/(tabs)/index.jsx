import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { images } from "../../constants";
const listHeader = (username) => (
  <View className="flex-row justify-between items-start mb-6">
    <View className="space-y-1 mt-3 flex-column">
      <Text className="text-sm text-gray-100 font-pmedium">Welcome Back</Text>
      <Text className="text-white font-psemibold text-2xl bg-bl">
        {username}
      </Text>
    </View>
    <View className="mt-2">
      <Image source={images.logoSmall} />
    </View>
  </View>
);
const Index = () => {
  const username = "Himanshu Gaur";
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList ListHeaderComponent={listHeader("Himanshu")} />
    </SafeAreaView>
  );
};

export default Index;
