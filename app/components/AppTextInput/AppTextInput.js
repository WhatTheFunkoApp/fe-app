import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import DefaultStyles from "../../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={DefaultStyles.colors.medium_grey}
            style={styles.icon}
          />
        )}
      </View>
      <TextInput style={DefaultStyles.text} {...otherProps} />
    </View>
  );
}

export default AppTextInput;
