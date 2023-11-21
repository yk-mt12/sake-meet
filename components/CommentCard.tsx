import { StyleSheet } from "react-native";
import { ScrollView, View, Text } from "react-native";
import OriginalButton from "./Button";

interface CommentCardProps {
  comment: string;
}

export function CommentCard(props: CommentCardProps) {
  const { comment } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{comment}</Text>
      <OriginalButton title="飲みたい" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: 336,
    width: "100%",
    marginHorizontal: 8,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  text: {
    fontSize: 18,
  },
});
