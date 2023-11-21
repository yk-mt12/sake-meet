import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

import { Text, View } from "../../components/Themed";
import Carousel from "../../components/Carousel";
import { CarouselTitle } from "../../components/CarouselTitle";
import { HeaderIcons } from "../../components/HeaderIcons";
import { CommentCard } from "../../components/CommentCard";

const data = [
  {
    id: 1,
    name: "ハイボール大好き主婦",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "とてもおいしくてまろやかな味わいでした。",
  },
  {
    id: 2,
    name: "お酒大好き32歳",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "飲みやすいかつ味も濃い感じでよかった",
  },
  {
    id: 3,
    name: "ハイボール大好き主婦",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "とてもおいしくてまろやかな味わいでした。",
  },
  {
    id: 4,
    name: "お酒大好き32歳",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "飲みやすいかつ味も濃い感じでよかった",
  },
  {
    id: 5,
    name: "ハイボール大好き主婦",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "とてもおいしくてまろやかな味わいでした。",
  },
  {
    id: 6,
    name: "お酒大好き32歳",
    location:
      "572-1 Kajiya, Yugawara, Ashigarashimo District, Kanagawa 259-0313",
    comment: "飲みやすいかつ味も濃い感じでよかった",
  },
];

export default function HomeScreen() {
  const [location, setLocation] = useState<any>(null);
  const [lat, setLat] = useState<any>(null);
  const [long, setLong] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    if (lat === null || long === null) return;
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAddress(data.results[0].formatted_address);
      });
  }, [lat, long]);

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
      <CarouselTitle name="RE: hoge" location={address} />
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
