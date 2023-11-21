import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Carousel from "../../components/Carousel";
import { CarouselTitle } from "../../components/CarouselTitle";
import { HeaderIcons } from "../../components/HeaderIcons";
import { CommentCard } from "../../components/CommentCard";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View lightColor="#EFEFEF" darkColor="#EFEFEF" />
      <HeaderIcons />
      <CarouselTitle name="RE: hoge" location="北千住" />
      <Carousel />
      <CommentCard comment="hgoehogheoghoehgoeho"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#EFEFEF",
  },
});
