import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import GridCard from "../../components/GridCard";
// import cardData from "../data/mockData";

import DrinkImage1 from "../../assets/images/drink1.png";

const cardData = [
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
  {
    source: DrinkImage1,
    title: "タイトル",
  },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <GridCard cardData={cardData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
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
