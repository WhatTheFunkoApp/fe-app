import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain" //necessary to keep the image's size in the screen
        style={styles.image}
        source={require("../assets/pickle_rick.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.light_green,
    position: "absolute",
    top: 40,
    left: 30,
  },

  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.light_green,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
