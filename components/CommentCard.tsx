import React from "react";
import { StyleSheet, View, Text } from "react-native";
import OriginalButton from "./Button";

interface CommentCardProps {
  comment: string;
}

export function CommentCard(props: CommentCardProps) {
  const { comment } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{comment}</Text>
      <View style={styles.buttonLayout}>
        <OriginalButton title="飲みたい" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: 300,
    marginHorizontal: 8,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24, // Ensure there's enough space for the button
    borderRadius: 8 
  },
  text: {
    fontSize: 18,
  },
  buttonLayout: {
    marginTop: "auto", 
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentCard;
