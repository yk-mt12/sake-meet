import React from "react";
import { Card } from "./Cards/Card";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { WantDrinkCard } from "./WantDrinkCard";

type CardType = {
  source: any;
  title: string;
};
interface GridCardProps {
  cardData: CardType[];
}

const GridCard = (props: GridCardProps) => {
  const { cardData } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.gridContainer}>
        {cardData.map((card, index) => (
          <View key={index} style={styles.card}>
            <WantDrinkCard
              key={index}
              source={card.source}
              title={card.title}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
});

export default GridCard;
