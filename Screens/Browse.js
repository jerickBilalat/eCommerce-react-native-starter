import * as React from "react";
import { useDispatch } from "react-redux";
import { Text } from "react-native-paper";
import { queryProducts } from "../Redux/Actions/productActions";
export default function Browse() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(queryProducts());
  });
  return <Text>Browse</Text>;
}
