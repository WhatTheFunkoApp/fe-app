import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light_grey} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;
