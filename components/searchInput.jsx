import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";
const SearchInput = ({ handleChangeText, placeholder, search }) => {
  return (
    <View className="space-x-4 w-full border-black-200 border-2  px-4 h-16 bg-black-100 rounded-2xl flex-row items-center focus:border-secondary">
      <TextInput
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        className="text-base mt-0.5 flex-1 h-16
      text-white font-pregular "
      />
      <TouchableOpacity onPress={search}>
        <Image source={icons.search} className="h-9 w-9" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
