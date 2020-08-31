import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const getHeaderName = route =>
  route?.state?.routeNames[route.state.index] || "Movies";

const Tabs = createBottomTabNavigator();
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "Search";
          } else if (route.name === "Favorites") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        }
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black"
        }
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favorites" component={Favs} />
    </Tabs.Navigator>
  );
};
