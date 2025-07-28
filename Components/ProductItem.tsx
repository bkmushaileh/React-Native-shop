import { Image, StyleSheet, Text, View } from "react-native";

interface CardProduct {
  name: string;
  price: string;
  image: string;
}

const FirstComponent = (props: CardProduct) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{
          uri: props.image,
        }}
      />
      <Text style={styles.productTitle}> {props.name}</Text>
      <Text style={styles.productTitle}>{props.price}</Text>
    </View>
  );
};

export default FirstComponent;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: 10,
    margin: 6,
    gap: 10,
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
