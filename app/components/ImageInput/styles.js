import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light_grey,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
