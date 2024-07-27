import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ touchableStyle, onPressHandler, textStyle, text }) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-200 rounded-xl min-h-[10%] w-full justify-center items-center ${touchableStyle}`}
      onPress={onPressHandler}
      activeOpacity="0.5"
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
