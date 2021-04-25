import React, { useState } from "react";
import Home from "./Home";
import Browse from "./Browse";
import Shoplist from "./Shoplist";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: "home" }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ tabBarIcon: "table" }}
      />
      <Tab.Screen
        name="Shoplist"
        component={Shoplist}
        options={{ tabBarIcon: "clipboard" }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
