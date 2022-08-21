import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "test2",
    price: 100,
    image: require("../assets/pickle_rick.jpg"),
  },
  {
    id: 2,
    title: "test1",
    price: 120,
    image: require("../assets/pickle_rick.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.scren}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scren: {
    padding: 20,
    paddingHorizontal: 8,
    backgroundColor: colors.light_grey,
  },
});

export default ListingsScreen;
