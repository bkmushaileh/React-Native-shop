import { productArray } from "@/data/product";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FirstComponent from "../Components/ProductItem";

export default function Index() {
  const myProduct = productArray.map((product) => (
    <FirstComponent
      name={product.name}
      price={product.price}
      image={product.image}
      key={product.id}
    />
  ));
  console.log(myProduct);
  return (
    <View style={styles.container}>
      <Text style={styles.myTitle}>Yoga Concept Store</Text>
      <Text>Shuwaikh Industrial, Mayar Complex, Basement Floor</Text>
      <Image
        style={{ width: 100, height: 150 }}
        source={{
          uri: "https://anandakw.shop/cdn/shop/files/ANANDA_-_BLACK_1200x1200.jpg?v=1614297297",
        }}
      />
      <View style={styles.product}>{myProduct}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: 10,
    margin: 6,
    gap: 10,
  },
  myTitle: {
    fontSize: 17,
  },
  product: {
    display: "flex",

    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    padding: 10,
    margin: 10,
    gap: 15,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  productTitle: {
    fontSize: 13,
  },
});
