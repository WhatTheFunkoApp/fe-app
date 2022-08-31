import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

import DefaultStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_grey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
