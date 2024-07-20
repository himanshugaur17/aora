import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/customButton";
import { images } from "../constants";
const HomePage = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full mt-5 min-h-[85vh] items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-4">
            <Text className="text-3xl text-white font-bold text-center">
              Discover the endless possibilities with{" "}
              <Text className="text-secondary-200 font-serif">HivaTech</Text>
            </Text>
          </View>
          <CustomButton
            text="Continue with your email"
            touchableStyle="mt-2"
            onPressHandler={() => router.push("/(tabs)")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
