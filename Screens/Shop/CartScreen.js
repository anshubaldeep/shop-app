import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/Cart/CartItem";
import colors from "../../constants/colors";
import { onItemDelete } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/orders";

const CartScreen = (props) => {
  const cartProducts = useSelector((state) => {
    const transFormedCartItems = [];
    for (const key in state.cart.cartProducts) {
      transFormedCartItems.push({
        productId: key,
        productTitle: state.cart.cartProducts[key].productTitle,
        productPrice: state.cart.cartProducts[key].productPrice,
        quantity: state.cart.cartProducts[key].quantity,
        sum: state.cart.cartProducts[key].sum,
      });
    }
    return transFormedCartItems;
  });
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch=useDispatch();
  const onDeleteHandler=(id)=>{
    dispatch(onItemDelete(id));
  }

  const onOrder=(cartProducts)=>{
    dispatch(addOrder(cartProducts,totalAmount));
    props.navigation.navigate("ordersScreen");
  }
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}> ${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={colors.primary}
          title="Order Now"
          disabled={cartProducts.length== 0}
          onPress={()=>onOrder(cartProducts)}
        ></Button>
      </View>
      <Text style={styles.title}>Cart Items</Text>
      {cartProducts.length==0 ? (
        <View style={styles.noProducts}>
        <Text style={styles.noProductsText}>No products in cart!</Text>
        </View>
      ):(
        <FlatList
          keyExtractor={(item) => item.productId}
          data={cartProducts}
          renderItem={(itemData) => (
            <CartItem
              id={itemData.item.productId}
              title={itemData.item.productTitle}
              price={itemData.item.productPrice}
              quantity={itemData.item.quantity}
              sum={itemData.item.sum}
              deleteItem={onDeleteHandler}
            />
          )}
        />
      )}
    </View>
  );
};

CartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Cart",
  };
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: colors.accent,
  },
  title: {
    color: "gray",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "open-sans-bold",
  },
  noProducts:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  noProductsText:{
    paddingTop:190
  }
});

export default CartScreen;
