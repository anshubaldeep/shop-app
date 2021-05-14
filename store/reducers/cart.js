import CartItem from "../../models/cart-item";
import { ADD_TO_CART, DELETE_ITEM } from "../actions/cart";

const initialState = {
  cartProducts: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let newOrUpdatedCartItem;

      if (state.cartProducts[addedProduct.id]) {
        newOrUpdatedCartItem = new CartItem(
          state.cartProducts[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.cartProducts[addedProduct.id].sum + prodPrice
        );
      } else {
        newOrUpdatedCartItem = new CartItem(
            1, 
            prodPrice, 
            prodTitle, 
            prodPrice
            );
      }
      const updatedAmount = state.totalAmount + prodPrice;
      return {
        ...state,
        cartProducts: {
          ...state.cartProducts,
          [addedProduct.id]: newOrUpdatedCartItem,
        },
        totalAmount: updatedAmount,
      };

      case DELETE_ITEM:
        let amount=state.totalAmount;
        const updatedDeleteCart={...state.cartProducts};
        if(state.cartProducts[action.id].quantity>1){
          amount=amount-state.cartProducts[action.id].productPrice;
          const newCartItem=new CartItem(
            state.cartProducts[action.id].quantity-1,
            state.cartProducts[action.id].productPrice,
            state.cartProducts[action.id].productTitle,
            state.cartProducts[action.id].sum-state.cartProducts[action.id].productPrice
          )
          return {...state,cartProducts:{...state.cartProducts,[action.id]:newCartItem},totalAmount:amount};
        }
        else{
          amount=amount - updatedDeleteCart[action.id].sum;
          delete updatedDeleteCart[action.id];
        }
        return {...state,cartProducts:updatedDeleteCart,totalAmount:amount};
  }
  return state;
};

export default cartReducer;
