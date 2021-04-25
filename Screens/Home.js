import * as React from "react";
import { Text } from "react-native-paper";
import { View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home is here</Text>
      <Button onPress={() => navigation.navigate("Pdp")} title="Go to Pdp" />
    </View>
  );
}
