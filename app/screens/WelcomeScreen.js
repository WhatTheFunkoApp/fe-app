import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";
import AppButton from "../components/AppButton/AppButton";

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
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log("Tapped")} />
        <AppButton title="register" onPress={() => console.log("Tapped")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
  },
});

export default WelcomeScreen;
