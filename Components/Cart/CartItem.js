import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Platform } from "react-native";
import colors from "../../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

const CartItem = (props) => {
  return (
    <View style={styles.card}>
    <View style={styles.topRow}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={()=>props.deleteItem(props.id)}>
          <Ionicons name={Platform.OS==='android'?'md-trash':'ios-trash'}/>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.price}>Price: ${props.price}</Text>
        <Text style={styles.quantity}>Quantity: {props.quantity}</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.sum}>Sum: {props.sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  topRow:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  price: {},
  quantity: {},
  sum: {
      paddingTop:10
  },
  card: {
    textAlign: "left",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop:25,
    padding:10
  },
  line: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:10
  },
});

export default CartItem;
