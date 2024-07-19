import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
const tabBarIcon = (focused, color, size, name) => {
  let iconName = name;
  if (name == "create") iconName = "plus";
  return (
    <View className="items-center gap-1">
      <Image source={icons[iconName]} tintColor={color} className="w-6 h-6" />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-xs capitalize`}
      >
        {name}
      </Text>
    </View>
  );
};
SplashScreen.preventAutoHideAsync();
const AppTabLayout = () => {
  const [loaded, error] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });
  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);
  if (!loaded && !error) return null;
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: "Home",
            tabBarIcon: ({ focused, color, size }) =>
              tabBarIcon(focused, color, size, "home"),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerTitle: "Bookmark",
            tabBarIcon: ({ focused, color, size }) =>
              tabBarIcon(focused, color, size, "bookmark"),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerTitle: "Profile",
            tabBarIcon: ({ focused, color, size }) =>
              tabBarIcon(focused, color, size, "profile"),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerTitle: "Create",
            tabBarIcon: ({ focused, color, size }) =>
              tabBarIcon(focused, color, size, "create"),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </>
  );
};

export default AppTabLayout;
