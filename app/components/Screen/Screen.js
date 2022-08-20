import React from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./styles";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
