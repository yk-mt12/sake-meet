import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import BeerSearch from "../../components/BeerSearch";

export default function RecommendScreen() {
  return (
    <View style={styles.container}>
      <BeerSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
