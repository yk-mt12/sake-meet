import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface CardProps {
  source: any;
  title: string;
}

export function HorizontalCard(props: CardProps) {
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
  },
  text: {
    marginLeft: 10, 
  },
  image: {
    width: 100, 
    height:100,
    resizeMode: "contain", 
  },
});
