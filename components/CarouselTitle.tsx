import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface CardProps {
  location: string;
  name: string;
}

export function CarouselTitle(props: CardProps) {
  const { location, name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.locationBox}>
        <Ionicons name="location-sharp" size={20} color="black" />
        <Text>{location}</Text>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    fontSize1: 16,
  },
  text: {
    fontSize: 12,
  },
});
