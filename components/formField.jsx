import React from "react";
import { Text, TextInput, View } from "react-native";

const FormField = ({ title, placeholder, secureEntry, handleChangeText }) => {
  return (
    <View className="space-y-2 mt-4">
      <Text className="text-gray-100 font-pmedium text-base">{title}</Text>
      <TextInput
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        secureTextEntry={secureEntry}
        className="w-full h-16 bg-black-100 border-2 border-black-100 rounded-2xl focus:border-secondary
      text-white font-psemibold text-base pl-2 pb-2"
      />
    </View>
  );
};

export default FormField;
