import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CartSizeText from "../UI/CartSizeText";
import CustomHeaderButton from "../UI/CustomHeaderButton";


const CartHeaderButton = (props) => {
    const cart=useSelector(state=>{
      let cartLength=0;
      for(const key in state.cart.cartProducts){
        cartLength+=state.cart.cartProducts[key].quantity;
      }
      return cartLength;
    });
    
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item iconName={Platform.OS==="android"?"md-cart":"ios-cart"} onPress={props.navigateToCart} />
      <CartSizeText cartSize={cart}/>
    </HeaderButtons>
  );
};

const styles = StyleSheet.create({});

export default CartHeaderButton;
