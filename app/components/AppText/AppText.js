import React from "react";
import { Text } from "react-native";
import DefaultStyles from "../../config/styles";

import styles from "./styles";

function AppText({ children, style, ...otherPorps }) {
  return <Text style={[DefaultStyles.text, style]} {...otherPorps}>{children}</Text>;
}

export default AppText;
