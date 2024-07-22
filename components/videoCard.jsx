import React from "react";
import { Image, Text, View } from "react-native";

const VideoCard = ({
  post: {
    title,
    thumbnail,
    video,
    users: { avatar, username },
  },
}) => {
  return (
    <View className="flex-row mt-4  space-x-3 items-center ml-3">
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
        <Text className="text-xs text-gray-100 font-pregular">{username}</Text>
      </View>
    </View>
  );
};

export default VideoCard;
