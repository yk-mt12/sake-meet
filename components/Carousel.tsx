import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card } from "./Card";
import DrinkImage1 from "../assets/images/drink1.png";
const cardData = [
  {
    imageSource: DrinkImage1,
    title: "タイトル",
  },
  {
    imageSource: DrinkImage1,
    title: "タイトル",
  },
  {
    imageSource: DrinkImage1,
    title: "タイトル",
  },
  {
    imageSource: DrinkImage1,
    title: "タイトル",
  },
  {
    imageSource: DrinkImage1,
    title: "タイトル",
  },
];

const Carousel = () => {
  return (
    <View style={styles.carousel}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* カードデータ配列をマッピングしてカードをレンダリング */}
        {cardData.map((card, index) => (
          <Card key={index} source={card.imageSource} title={card.title} />
        ))}
      </ScrollView>
      {/* 矢印ナビゲーションの実装は省略 */}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 200, // 適切な幅に設定
    marginHorizontal: 8, // 必要に応じて調整
    // その他のスタイル定義
  },
  image: {
    width: "100%",
    height: 100, // 必要に応じて調整
    // その他のスタイル定義
  },
  title: {
    textAlign: "center",
    // その他のスタイル定義
  },
  // 矢印ナビゲーションのスタイル定義も必要に応じてここに追加
});

// cardDataはカードの情報を持つ配列で、
// { imageSource: require('path_to_image'), title: 'タイトル' } のようなオブジェクトを含みます。

export default Carousel;
