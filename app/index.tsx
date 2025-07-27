import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.myTitle}>Yoga Concept Store</Text>
      <Text>Shuwaikh Industrial, Mayar Complex, Basement Floor</Text>
      <Image
        style={{ width: 70, height: 100 }}
        source={{
          uri: "https://anandakw.shop/cdn/shop/files/ANANDA_-_BLACK_1200x1200.jpg?v=1614297297",
        }}
      />
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
});
