import { useState } from "react";
import { StyleSheet, View, StatusBar, Text, TextInput } from "react-native";
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

export default function App() {
  const [firstName, setFirstName] = useState("");
  return <AppTextInput placeholder="Username" icon="email" />;
}

/*
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>*/

const styles = StyleSheet.create({});
