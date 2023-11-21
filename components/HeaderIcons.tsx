import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import NotificationIcon from "../assets/images/notifications_none.svg";
import AvaterIcon from "../assets/images/user-circle.svg";

export function HeaderIcons() {
  return (
    <View style={styles.container}>
      <Image source={NotificationIcon} />
      <Image source={AvaterIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
