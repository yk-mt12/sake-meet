import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function HeaderIcons() {
  return (
    <View style={styles.container}>
      <Ionicons name="notifications-sharp" size={24} color="black" />
      <FontAwesome name="user-circle-o" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 8,
  },
});
