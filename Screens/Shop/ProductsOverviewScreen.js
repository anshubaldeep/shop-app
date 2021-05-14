import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import CartHeaderButton from "../../Components/Cart/CartHeaderButton";
import ProductItem from "../../Components/Shop/ProductItem";
import CustomHeaderButton from "../../Components/UI/CustomHeaderButton";
import { addToCart } from "../../store/actions/cart";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch=useDispatch();
  const onViewDetail=(id,name)=>{
    props.navigation.navigate('productDetails',{productId:id,productName:name});
  }
  const onAddToCart=(product)=>{
    dispatch(addToCart(product));
  }
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            title={itemData.item.title}
            price={itemData.item.price}
            imageUrl={itemData.item.imageUrl}
            productId={itemData.item.id}
            product={itemData.item}
            onViewDetail={onViewDetail}
            onAddToCart={onAddToCart}
          />
        )}
      />
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = (navigationOptions) => {
  const cartNavigation=()=>{
    navigationOptions.navigation.navigate('cartScreen');
  }
  const toggle=()=>navigationOptions.navigation.toggleDrawer();
  return {
    headerTitle: "All Products",
    headerRight:()=><CartHeaderButton navigateToCart={cartNavigation}/>,
    headerLeft:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}><Item iconName='menu' onPress={toggle}></Item></HeaderButtons>
  };
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
