import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface CardProps {
  source: any;
  title: string;
}

export function Card(props: CardProps) {
  const { source, title } = props;

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#333",
    shadowRadius: 0,
    marginHorizontal: 8,
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#fff",
  },
  text: {
    color: "#333",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 24,
  },
  image: {
    width: 145,
    height: 173,
  },
});
