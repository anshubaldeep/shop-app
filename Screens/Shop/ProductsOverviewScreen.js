import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../Components/Shop/ProductItem";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
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
            onViewDetail={()=>{}}
            onAddToCart={()=>console.log('cartWheel Babay!')}
          />
        )}
      />
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = (navigationOptions) => {
  return {
    headerTitle: "All Products",
  };
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
