import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Swipable works only on iOS at the moment
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
  styleTitle,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light_grey} onPress={onPress}>
        <View style={[styles.container, style]}>
          <View style={styles.IconComponentContainer}>{IconComponent}</View>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={[styles.title, styleTitle]} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium_grey}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;
