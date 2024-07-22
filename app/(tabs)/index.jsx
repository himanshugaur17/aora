import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import SearchInput from "../../components/searchInput";
import VideoCard from "../../components/videoCard";
import { images } from "../../constants";
import { getPosts, useAppWrite } from "../../lib/appWrite";
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
  const { data: posts, isLoading } = useAppWrite(getPosts);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        scrollEnabled={true}
        ListHeaderComponent={listHeader("Himanshu")}
        keyExtractor={(post) => post.$id}
        data={posts}
        renderItem={({ item }) => <VideoCard post={item} />}
      />
    </SafeAreaView>
  );
};

export default Index;
