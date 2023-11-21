import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface IconProps {
  source: any;
}
export function Icon(props: IconProps) {
  const { source } = props;

  return (
    <View style={styles.container}>
      <Image source={source} width={32} height={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
