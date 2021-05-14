import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

const CartSizeText = ({cartSize}) => {
  return (
    <View style={styles.balloon}>
      <Text style={styles.number}>{cartSize}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balloon: {
    backgroundColor: "white",
    borderRadius: 100,
    height:20,
    width:20,
    marginTop:-2,
    alignItems:'center',
    marginLeft:-21,
  },
  number:{
      fontFamily:'open-sans',
      fontSize:13
  }
});

export default CartSizeText;
