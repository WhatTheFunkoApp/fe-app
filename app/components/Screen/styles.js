import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    padding: 10,
  },
  view: {
    flex: 1,
  },
});

export default styles;
