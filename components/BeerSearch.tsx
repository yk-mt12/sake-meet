import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BeerSearch = () => {
  const [beerName, setBeerName] = useState("");
  const [beers, setBeers] = useState([]);

  const searchBeer = async () => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${encodeURIComponent(
          beerName
        )}`
      );
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="ビールの名前を入力"
          value={beerName}
          onChangeText={setBeerName}
        />
        <Pressable onPress={searchBeer} style={styles.button}>
          <FontAwesome
            name="search"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.text}>検索</Text>
        </Pressable>
      </View>
      <FlatList
        data={beers}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image_url }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text>{item.tagline}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FB5660",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "700",
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    objectFit: "fill"
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center", // Align items vertically
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BeerSearch;
