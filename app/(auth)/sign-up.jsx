import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/customButton";
import FormField from "../../components/formField";
import { images } from "../../constants";
import { createUserAccount, createUserSession } from "../../lib/appWrite";
const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });

  const signUpSubmit = () => {
    if (!form.email || !form.password || !form.username)
      alert("Please fill the details correctly");
    else
      createUserAccount(form.username, form.email, form.password).then(
        (response) => {
          console.log("account creation success: " + response);
          createUserSession(form.email, form.password).then((response) => {
            console.log("successful session creation");
            router.replace("/(tabs)");
          });
        },
        (reason) => {
          console.log("account creation failed: " + reason);
          alert("account creation failed: " + reason);
        }
      );
  };
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
          <FormField
            title={"Username"}
            handleChangeText={(value) => setForm({ ...form, username: value })}
          />
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
            text="Sign Up"
            touchableStyle={"mt-5"}
            onPressHandler={signUpSubmit}
          />
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
