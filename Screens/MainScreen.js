import React, { useState } from "react";
import Home from "./Home";
import Browse from "./Browse";
import Shoplist from "./Shoplist";
import { BottomNavigation } from "react-native-paper";

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "feeds", title: "Home", icon: "home", color: "#3F51B5" },
    { key: "albums", title: "Browse", icon: "table", color: "#009688" },
    { key: "recents", title: "Shoplist", icon: "clipboard", color: "#795548" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: Home,
    albums: Browse,
    recents: Shoplist,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;
