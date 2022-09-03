import { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  StatusBar,
  Text,
  TextInput,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

import AppText from "./app/components/AppText";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
