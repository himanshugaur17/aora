import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import FormField from "../../components/formField";
import { images } from "../../constants";
const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-center px-6 my-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField title={"Email"} />
          <FormField title={"Password"} secureEntry={true} />
          <CustomButton text="Sign In" touchableStyle={"mt-5"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
