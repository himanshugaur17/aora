import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import FormField from "../../components/formField";
import { images } from "../../constants";

const SignUp = () => {
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
              Sign Up to Aora
            </Text>
            <FormField title={"Username"} />
            <FormField title={"Email"} />
            <FormField title={"Password"} secureEntry={true} />
            <CustomButton text="Sign Up" touchableStyle={"mt-5"} />
            <View className="pt-5 w-full items-center gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?
              </Text>
              <Link href={"/sign-in"} className="text-white text-base">
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default SignUp;
