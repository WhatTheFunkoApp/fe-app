import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  IconComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "500",
  },

  subTitle: {
    color: colors.medium_grey,
  },
});

export default styles;
