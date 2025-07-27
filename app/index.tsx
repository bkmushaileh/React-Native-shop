import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
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
      <View style={styles.product}>
        <View style={styles.container}>
          <Image
            style={styles.productImage}
            source={{
              uri: "https://anandakw.shop/cdn/shop/products/unnamed_1800x1800_54ae5757-54cf-42a4-ac0b-4b5662b78576_540x.jpg?v=1651756927",
            }}
          />
          <Text style={styles.productTitle}>Prolite Yoga Mat</Text>
          <Text style={styles.productTitle}>Price: 20.000 KD</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.productImage}
            source={{
              uri: "https://anandakw.shop/cdn/shop/products/DileshSolanki-KristinaYogaMatBagShootPink-6_360x.jpg?v=1611912845",
            }}
          />
          <Text>Bangles - 1 lbs</Text>
          <Text style={styles.productTitle}>Price: 16.000 KD</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
