import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import SearchInput from "../../components/searchInput";
import { images } from "../../constants";
const dummyData = [
  { id: "Video 1", key: 1 },
  { id: "Video 2", key: 2 },
  { id: "Video 3", key: 3 },
];
const listHeader = (username) => (
  <View>
    <View className="flex-row justify-between items-start mb-6">
      <View className="space-y-1 mt-3 flex-column">
        <Text className="text-sm text-gray-100 font-pmedium">Welcome Back</Text>
        <Text className="text-white font-psemibold text-2xl bg-bl">
          {username}
        </Text>
      </View>
      <View className="mt-2">
        <Image
          source={images.logoSmall}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>
    </View>
    <SearchInput />
  </View>
);
const Index = () => {
  const username = "Himanshu Gaur";
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        ListHeaderComponent={listHeader("Himanshu")}
        keyExtractor={(item) => item.id}
        data={dummyData}
        renderItem={({ item }) => (
          <Text className="text-white font-pregular text-2xl">{item.id}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Index;
