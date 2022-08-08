import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/ironman_background.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.light_green,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.light_green,
  },

  logo: {
    width: 140,
    height: 140,
  },
});

export default WelcomeScreen;
