import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../../constants/colors";

const TouchableComponent = (props) =>
  Platform.OS === "android" ? (
    <TouchableNativeFeedback {...props} useForeground>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
  );
const ProductItem = (props) => {
  return (
      <View style={styles.product}>
      <View style={styles.touchable}>
    <TouchableComponent
      onPress={() => props.onViewDetail(props.productId, props.title)}
    >
    <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Image}
            source={{
              uri: props.imageUrl,
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={colors.primary}
            title="View details"
            onPress={() => props.onViewDetail(props.productId, props.title)}
          ></Button>
          <Button
            color={colors.primary}
            title="To Cart"
            onPress={()=>props.onAddToCart(props.product)}
          ></Button>
        </View>
        </View>
    </TouchableComponent>
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable:{
      overflow:'hidden',
      borderRadius:10
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  Image: {
    height: "100%",
    width: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily:'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily:'open-sans'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
