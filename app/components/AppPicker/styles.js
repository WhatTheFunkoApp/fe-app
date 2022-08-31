import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

//import DefaultStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light_grey,
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

  placeholder: {
    color: defaultStyles.colors.medium_grey,
  },

  text: {
    flex: 1,
  },
});

export default styles;
