import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

//Swipable works only on iOS at the moment
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light_grey} onPress={onPress}>
        <View style={[styles.container, style]}>
          <View style={styles.IconComponentContainer}>{IconComponent}</View>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;
