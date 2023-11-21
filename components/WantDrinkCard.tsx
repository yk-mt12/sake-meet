import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export interface WantDrinkCardProps {
  source: any;
  title: string;
}

export function WantDrinkCard(props: WantDrinkCardProps) {
  const { source, title } = props;

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>飲んだ！</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxShadow: "#333",
    shadowRadius: 0,
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 28,

  },
  text: {
    color: "#333",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#FB5660",
    borderRadius: 12,
    padding: 4,
    marginTop: 8,
    textAlign: "center",
    marginBottom: 8,
    minWidth: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxHeight: 100,
  }
});
