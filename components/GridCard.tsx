import React from "react";
import { Card } from "./Card";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import cardData from "../data/mockData";

const GridCard = () => {
  return (
    <View style={styles.gridContainer}>
      {cardData.map((card, index) => (
        <Card key={index} source={card.imageSource} title={card.title} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    gridContainer: {
        
    }
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
  arrowIcon: {
    marginHorizontal: 16,
  },
});

// cardDataはカードの情報を持つ配列で、
// { imageSource: require('path_to_image'), title: 'タイトル' } のようなオブジェクトを含みます。

export default Carousel;
