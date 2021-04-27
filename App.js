import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import configureStore from "./Redux/Store/configureStore";
import theme from "./CustomProperties/Themes";
import MainScreen from "./Screens/MainScreen";
import Pdp from "./Screens/Pdp";

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRoute="Main">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Pdp" component={Pdp} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
