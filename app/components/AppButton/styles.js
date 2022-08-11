import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light_green,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.light_black,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;