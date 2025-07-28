import { productArray } from "@/data/product";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
      <ScrollView horizontal>
        <View style={styles.product}>{myProduct}</View>
      </ScrollView>
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
    flexDirection: "row",
    alignItems: "baseline",
    padding: 10,
    margin: 10,
    gap: 5,
  },
});
