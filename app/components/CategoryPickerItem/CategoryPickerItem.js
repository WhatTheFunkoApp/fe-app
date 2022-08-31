import React from "react";
import { View } from "react-native";
styles;
import AppText from "../AppText";
import Icon from "../Icon";
import styles from "./styles";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}> {item.label}</AppText>
    </View>
  );
}

export default CategoryPickerItem;
