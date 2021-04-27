import * as React from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { queryProducts } from "../Redux/Actions/productActions";

const selectProducts = (state) => state.products.toShop;

const selectUsedProducts = (state) => {
  return state.products.toShop.filter((item) => item.used);
};
// {
// productType: 'pool_table',
// inStock: 1,
// sold: 0,
// publish: true,
// images: [
//   'https://res.cloudinary.com/minnesotarec/image/upload/v1617647590/mnhermanrex_unsigned/vy0ikvwu1comnbeait2a.png'
// ],
// _id: '606b57ed3b038b0017dc255f',
// provider: 'allamerican',
// name: 'Cascadia by American Classic',
// used: false,
// description: 'Available in 7 and 8 foot sizes and variety of colors. Contact store to check availability.',
// price: '2799',
// poolTableSize: '8',
// createdAt: '2021-04-05T18:33:17.239Z',
// updatedAt: '2021-04-14T12:12:08.321Z',
// __v: 0
//}
const ProuductCard = ({ name, price, images, productType, navigateToPdp }) => {
  const imageLink =
    images.length !== 0
      ? images[0]
      : require("../Assets/Images/default_400x340.png");
  return (
    <Card>
      <View style={styles.row}>
        <TouchableOpacity
          style={{ flex: 2.5 }}
          onPress={() => {
            console.log("pressss trigger");
            return navigateToPdp();
          }}
        >
          <Card.Cover
            source={{ uri: `${imageLink}` }}
            defaultSource={require("../Assets/Images/default_400x340.png")}
          />
        </TouchableOpacity>
        <View style={[styles.col, { flex: 3 }]}>
          <Card.Content>
            <Title onPress={() => navigateToPdp()}>{name}</Title>
            <Paragraph>
              {productType === "pool_table" || productType == "swimming_pool"
                ? "Starting at "
                : ""}
              {`$${price}`}
            </Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button>Add to List</Button>
            <Button>Add to Cart</Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );
};

export default function Browse({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  React.useEffect(() => {
    dispatch(queryProducts());
  }, []);

  return (
    <ScrollView style={styles.container}>
      {products &&
        products.length > 0 &&
        products.map((productDetails) => {
          return (
            <ProuductCard
              navigateToPdp={() =>
                navigation.navigate("Pdp", { productId: productDetails._id })
              }
              key={productDetails.name}
              {...productDetails}
            />
          );
        })}
    </ScrollView>
  );
=======
import { useDispatch } from "react-redux";
import { Text } from "react-native-paper";
import { queryProducts } from "../Redux/Actions/productActions";
export default function Browse() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(queryProducts());
  });
  return <Text>Browse</Text>;
>>>>>>> origin/master
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  col: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
  flex_1: {
    flex: 1,
  },
  flex_2: {
    flex: 2,
  },
});
