import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./FavoritesScreen";
import DrunkScreen from "./DrunkScreen";
import RecommendScreen from "./RecommendScreen";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="新しい出会い"
      screenOptions={{
        tabBarActiveTintColor: "#FB5660",
        tabBarStyle: {
          borderTopColor: "#EFEFEF",
          backgroundColor: "#EFEFEF",
        },
      }}>
      <Tab.Screen
        name="新しい出会い"
        component={HomeScreen}
        options={{
          tabBarLabel: "新しい出会い",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="drink" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="飲みたい"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "飲みたい",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" size={size} color={color} />
          ),
        }}
      />
      {/* 飲んだ */}
      <Tab.Screen
        name="飲んだ"
        component={DrunkScreen}
        options={{
          tabBarLabel: "飲んだ",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wine-bottle" size={size} color={color} />
          ),
        }}
      />
      {/* ススめる */}
      <Tab.Screen
        name="ススめる"
        component={RecommendScreen}
        options={{
          tabBarLabel: "すすめる",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="like2" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
