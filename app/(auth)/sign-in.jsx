import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import FormField from "../../components/formField";
import { images } from "../../constants";
const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const signInSubmit = (event) => Alert.alert(JSON.stringify(form));
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
          <FormField
            title={"Email"}
            handleChangeText={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            title={"Password"}
            secureEntry={true}
            handleChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            text="Sign In"
            touchableStyle={"mt-5"}
            onPressHandler={signInSubmit}
          />
          <View className="pt-5 w-full items-center gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href={"/sign-up"} className="text-white text-base">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
