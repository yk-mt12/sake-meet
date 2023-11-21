import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

interface ButtonProps {
  title: string;
}
const OriginalButton = (props: ButtonProps) => {
  const { title } = props;
  return (
    <Pressable
      style={styles.customButton}
      onPress={() => alert("ボタンが押されました")}>
      <MaterialIcons name="record-voice-over" size={24} color="#fff" style={styles.icon}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  customButton: {
    // maxWidth: 150, // Set your desired minimum width
    backgroundColor: "#FB5660",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center", // Center items vertically
    justifyContent: "center", // Center items horizontally
    paddingVertical: 12,
    paddingHorizontal: 32, // Adjust padding as needed
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "700",
  },
  icon: {
    marginRight: 8, // Add space between the icon and text
  },
});

export default OriginalButton;
