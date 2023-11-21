import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Carousel from "../../components/Carousel";
import { CarouselTitle } from "../../components/CarouselTitle";
import { HeaderIcons } from "../../components/HeaderIcons";
import { CommentCard } from "../../components/CommentCard";

export default function HomeScreen() {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let address = await Location.reverseGeocodeAsync({
  //       latitude: location?.coords.latitude,
  //       longitude: location?.coords.longitude,
  //     });
  //     setAddress(address);
  //   })();
  // }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>{address}</Text>
      <View lightColor="#EFEFEF" darkColor="#EFEFEF" />
      <View style={styles.headerIconsContainer}>
        <HeaderIcons />
      </View>
      <CarouselTitle name="RE: hoge" location="北千住" />
      <View style={styles.carouselContainer}>
        <Carousel />
      </View>
      <View style={styles.commentContainer}>
        <CommentCard comment="hgoehogheoghoehgoeho" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parameter: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#EFEFEF",
    marginHorizontal: 8,
  },
  headerIconsContainer: {
    marginTop: 32,
  },
  carouselContainer: {
    marginTop: 32,
  },
  commentContainer: {
    marginTop: 32,
  },
});
