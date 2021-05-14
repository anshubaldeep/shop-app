import React from "react";
import { StyleSheet, ScrollView, Text, Image, Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartHeaderButton from "../../Components/Cart/CartHeaderButton";
import colors from "../../constants/colors";
import { addToCart } from "../../store/actions/cart";

const ProductDetailsScreen = (props) => {
  const product = useSelector((state) =>
    state.products.availableProducts.filter(
      (product) => product.id === props.navigation.getParam("productId")
    )[0]
  );
  const dispatch=useDispatch();
  const onAddToCart=()=>{
      dispatch(addToCart(product));
  }
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{
          uri:product.imageUrl
      }} 
          style={styles.image}
      />
      <View style={styles.actions}>
      <Button color={colors.primary} title='Add to Cart' onPress={onAddToCart}/>
      </View>
      <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.title}>{product.title}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions=navData=>{
    const productName=navData.navigation.getParam('productName');
    const cartNavigation=()=>{
        navData.navigation.navigate('cartScreen');
    }
    return{
        headerTitle:productName,
        headerRight:()=><CartHeaderButton navigateToCart={cartNavigation}/>
    }
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'50%'
    },
    screen:{
        alignItems:'center',
        flex:1
    },
    title:{
        fontSize:22,
        paddingVertical:5,
    },
    price:{
        fontSize:20,
        color:'#888',
        marginVertical:20,
        textAlign:'center',
        fontFamily:'open-sans-bold'
    },
    description:{
        fontSize:14,
        textAlign:'center',
        fontFamily:'open-sans'
    },
    actions:{
        marginTop:22,
        justifyContent:'center',
        width:'40%'
    }
});

export default ProductDetailsScreen;
