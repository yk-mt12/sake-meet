import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LocationIcon from "../assets/images/location_on.svg";

export interface CardProps {
  location: string;
  name: string;
}

export function CarouselTitle(props: CardProps) {
  const { location, name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.locationBox}>
        <Image source={LocationIcon} />
        <Text>{location}</Text>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    fontSize1: 16,
  },
  text: {
    fontSize: 12,
  },
});
