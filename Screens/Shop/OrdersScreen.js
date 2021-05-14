import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View style={styles.screen}>
      <ScrollView>
        {orders.map((order, index) => {
          return (
            <View key={index} style={styles.order}>
              <View>
                <Text style={styles.orderNo}>Order {index + 1}</Text>
              </View>
              <View style={styles.products}>
              {order.products.map((product) => (
                <View style={styles.row}>
                  <Text style={styles.title}>{product.productTitle}</Text>
                  <Text style={styles.quantity}>{product.quantity}</Text>
                  <Text style={styles.sum}>$ {product.sum}</Text>
                </View>
              ))}
              </View>
              <View style={styles.line} />
              <View>
                <Text style={styles.amount}>$ {order.amount}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  orderNo:{
    fontSize:20,
    marginVertical:10
  },
  products:{
    marginBottom:10
  },
  row: {
    flexDirection: "row",
    textAlign: "center",
    display:"flex"
  },
  title: {
      fontSize:16,
      flex:15
  },
  quantity: {
      
      flex:7
  },
  sum: {
      
      flex:5
  },
  line: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  order: {
    marginVertical: 20,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  amount: {
    textAlign: "right",
    fontSize: 17,
    marginVertical:10
  },
});

export default OrdersScreen;
