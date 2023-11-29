import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import GridCard from "../../components/GridCard";

import DrinkImage1 from "../../assets/images/drink1.png";
import DrinkImage2 from "../../assets/images/drink2.jpg";
import DrinkImage3 from "../../assets/images/drink3.jpg";
import DrinkImage4 from "../../assets/images/drink4.jpg";
import DrinkImage5 from "../../assets/images/drink5.jpg";
import DrinkImage6 from "../../assets/images/drink6.jpg";
import DrinkImage7 from "../../assets/images/drink7.jpg";
import DrinkImage8 from "../../assets/images/drink8.jpg";
import DrinkImage9 from "../../assets/images/drink9.jpg";

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

const cardData = [
  {
    source: DrinkImage1,
    title: "Lucky Dog",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage2,
    title: "Rouge",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage3,
    title: "Shinsyc",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage4,
    title: "こてさんね",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage5,
    title: "夢のあと",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage6,
    title: "鶴見",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage7,
    title: "天文館",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage8,
    title: "角ハイボール",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
  {
    source: DrinkImage9,
    title: "各ハイボール",
    comment: "すっきりした味わいで飲みやすかったです！",
  },
];
