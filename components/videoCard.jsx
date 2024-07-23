import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";
const VideoCard = ({
  post: {
    title,
    thumbnail,
    video,
    users: { avatar, username },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col mt-4 ">
      <View className="flex-row space-x-3 items-center ml-3">
        {/* username avatar view */}
        <View className="w-[46px] h-[46px] rounded-lg border border-secondary">
          <Image
            source={{ uri: avatar }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </View>
        <View className="flex-col">
          <Text className="text-white text-sm font-psemibold" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-xs text-gray-100 font-pregular">
            {username}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="flex-1 h-60 rounded-2xl ml-3 items-center justify-center"
        onPress={() => setPlay(!play)}
      >
        {play ? (
          <Text className="text-white text-xm">Click to pause</Text>
        ) : (
          <>
            <Image
              className="relative mt-3 w-full h-full rounded-xl"
              resizeMode="cover"
              source={{ uri: thumbnail }}
            />
            <Image
              source={icons.play}
              className="absolute w-12 h-12"
              resizeMode="contain"
            />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;
