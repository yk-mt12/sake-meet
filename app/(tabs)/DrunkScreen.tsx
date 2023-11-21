import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { HorizontalCard } from "../../components/Cards/HorizontalCard";
import DrinkImage1 from "../../assets/images/drink1.png";
import { ScrollView } from "react-native-gesture-handler";

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

export default function DrunkScreen() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {cardData &&
          cardData.map((card, index) => (
            <HorizontalCard key={index} source={card.source} title={card.title} />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
    marginTop: 32,
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
