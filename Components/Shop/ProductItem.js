import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import colors from "../../constants/colors";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
    <View style={styles.imageContainer}>
      <Image style={styles.Image} source={{
          uri:props.imageUrl
      }}/>
    </View>
      <View style={styles.details}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
      <Button color={colors.primary} title="View details" onPress={props.onViewDetail}></Button>
      <Button color={colors.primary} title="To Cart" onPress={props.onAddToCart}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: { width:0, height:2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    imageContainer:{
        height:'60%',
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    Image:{
        height:'100%',
        width:'100%'
    },
    details:{
        alignItems:'center',
        height: '15%',
        padding:10,
        marginBottom:5
    },
    title:{
        fontSize:18,
        marginVertical: 4
    },
    price:{
        fontSize:14,
        color:'#888'
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'25%',
        paddingHorizontal:20

    }
});

export default ProductItem;