import React from "react";
import { Platform, Text } from "react-native";
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import CartHeaderButton from "../Components/Cart/CartHeaderButton";
import CartSizeText from "../Components/UI/CartSizeText";
import CustomHeaderButton from "../Components/UI/CustomHeaderButton";
import colors from "../constants/colors";
import CartScreen from "../Screens/Shop/CartScreen";
import OrdersScreen from "../Screens/Shop/OrdersScreen";
import ProductDetailsScreen from "../Screens/Shop/ProductDetailsScreen";
import ProductsOverviewScreen from "../Screens/Shop/ProductsOverviewScreen";



const defaultStackNavOptions={
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
}

const ProductNavigator = createStackNavigator(
  {
    productOverview: ProductsOverviewScreen,
    productDetails: ProductDetailsScreen,
    cartScreen: CartScreen,
    ordersScreen: OrdersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);


const OrdersNavigator=createStackNavigator({
  OrdersScreen: OrdersScreen
},{
  defaultNavigationOptions:defaultStackNavOptions
})

const DrawerNavigator = createDrawerNavigator({
  ProductNavigator: ProductNavigator,
  OrdersNavigator:OrdersNavigator
},{
  contentOptions:{
    activeTintColor:colors.primary
  }
});

export default createAppContainer(ProductNavigator);
